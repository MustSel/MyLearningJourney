"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Purchase Controllers:
const { mongoose } = require("../configs/dbConnection")
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
    
        try {
            // Set userId from logged-in user:
            req.body.userId = req.user._id;
    
            // Get the current purchase:
            const currentPurchase = await Purchase.findOne({ _id: req.params.id });
            if (!currentPurchase) {
                return res.status(404).send({ error: true, message: 'Purchase not found' });
            }
    
            // Convert IDs to ObjectId
            const firmId = new mongoose.Types.ObjectId(req.body.firmId);
            const brandId = new mongoose.Types.ObjectId(req.body.brandId);
            const productId = new mongoose.Types.ObjectId(req.body.productId);
    
            // Check if firmId, brandId, or productId has changed:
            if (!firmId.equals(currentPurchase.firmId) ||
                !brandId.equals(currentPurchase.brandId) ||
                !productId.equals(currentPurchase.productId)) {
    
                // Subtract quantity from old product:
                await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: -currentPurchase.quantity } });
    
                // Add quantity to new product:
                const updateProduct = await Product.updateOne(
                    { _id: productId },
                    { $inc: { quantity: req.body.quantity || currentPurchase.quantity } }
                );
    
                if (updateProduct.modifiedCount == 0) {
                    return res.status(422).send({ error: true, message: 'Failed to update product quantity for the new product.' });
                }
            }
    
            // If only quantity changed:
            if (req.body?.quantity) {
                const difference = req.body.quantity - currentPurchase.quantity;
                const updateProduct = await Product.updateOne(
                    { _id: currentPurchase.productId },
                    { $inc: { quantity: difference } }
                );
    
                if (updateProduct.modifiedCount == 0) {
                    return res.status(422).send({ error: true, message: 'Failed to update product quantity for the current product.' });
                }
            }
    
            // Update Purchase document:
            const data = await Purchase.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
    
            res.status(202).send({
                error: false,
                data,
                new: await Purchase.findOne({ _id: req.params.id })
            });
        } catch (error) {
            res.status(500).send({ error: true, message: error.message });
        }
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