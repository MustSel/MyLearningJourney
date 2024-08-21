"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Purchase Controllers:

const Purchase = require('../models/purchase')
const Product = require('../models/product')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Purchase, {}, ['userId', 'firmId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Purchase),
            data
        })

    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Purchase"
                }
            }
        */

        // Set userId from logined user:
        req.body.userId = req.user._id

        const data = await Purchase.create(req.body)

        // Satınalma sonrası ürün adetini arttır:
        const updateProduct = await Product.updateOne({ _id: data.productId }, { $inc: { quantity: +data.quantity } })

        res.status(201).send({
            error: false,
            data
        })
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */

        const data = await Purchase.findOne({ _id: req.params.id }).populate(['userId', 'firmId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Purchase"
                }
            }
        */

        // Set userId from logged-in user:
        req.body.userId = req.user._id

        const currentPurchase = await Purchase.findOne({ _id: req.params.id })

        // firmId, brandId veya productId değiştiyse:
        if (!req.body?.firmId.equals(currentPurchase.firmId) ||
            !req.body?.brandId.equals(currentPurchase.brandId) ||
            !req.body?.productId.equals(currentPurchase.productId)) {

            // Eski product'tan quantity eksilt:
            await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: -currentPurchase.quantity } })

            // Yeni product'a quantity ekle:
            const updateProduct = await Product.updateOne(
                { _id: req.body.productId },
                { $inc: { quantity: req.body.quantity || currentPurchase.quantity } }
            )

            if (updateProduct.modifiedCount == 0) {
                res.errorStatusCode = 422
                throw new Error('Failed to update product quantity for the new product.')
            }
        }

        // Sadece quantity değiştiyse:
        if (req.body?.quantity) {
            const difference = req.body.quantity - currentPurchase.quantity
            const updateProduct = await Product.updateOne(
                { _id: currentPurchase.productId },
                { $inc: { quantity: difference } }
            )

            if (updateProduct.modifiedCount == 0) {
                res.errorStatusCode = 422
                throw new Error('Failed to update product quantity for the current product.')
            }
        }

        // Purchase belgesini güncelle:
        const data = await Purchase.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Purchase.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

        // Mevcut işlemdeki adet bilgisi al:
        const currentPurchase = await Purchase.findOne({ _id: req.params.id })

        // Delete:
        const data = await Purchase.deleteOne({ _id: req.params.id })

        // Product quantity'den adeti eksilt:
        const updateProduct = await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: -currentPurchase.quantity } })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },

}