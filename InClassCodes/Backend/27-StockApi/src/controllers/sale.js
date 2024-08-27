"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Sale Controllers:
const { mongoose } = require('../configs/dbConnection')
const Sale = require('../models/sale')
const Product = require('../models/product')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
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

        const data = await res.getModelList(Sale, {}, ['userId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Sale),
            data
        })

    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Sale"
                }
            }
        */

        // Set userId from logined user:
        req.body.userId = req.user._id

        // Güncel stok bilgisini al:
        const currentProduct = await Product.findOne({ _id: req.body.productId })

        if (currentProduct.quantity >= req.body.quantity) {

            // Create:
            const data = await Sale.create(req.body)

            // Satıştan sonra product adetten eksilt:
            const updateProduct = await Product.updateOne({ _id: data.productId }, { $inc: { quantity: -data.quantity } })

            res.status(201).send({
                error: false,
                data
            })

        } else {

            res.errorStatusCode = 422
            throw new Error('There is not enough product-quantity for this sale.', { cause: { currentProduct } })
        }
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */

        const data = await Sale.findOne({ _id: req.params.id }).populate(['userId', 'brandId', 'productId'])

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref: "#/definitions/Sale"
                }
            }
        */
    
        try {
            // Set userId from logged-in user:
            req.body.userId = req.user._id;
    
            // Get the current sale:
            const currentSale = await Sale.findOne({ _id: req.params.id });
            if (!currentSale) {
                return res.status(404).send({ error: true, message: 'Sale not found' });
            }
    
            // Convert IDs to ObjectId if they are not already
            const brandId = new mongoose.Types.ObjectId(req.body.brandId);
            const productId = new mongoose.Types.ObjectId(req.body.productId);
    
            // Check if brandId or productId has changed:
            if (!brandId.equals(currentSale.brandId) || !productId.equals(currentSale.productId)) {
                // Update product quantity
                await Product.updateOne({ _id: currentSale.productId }, { $inc: { quantity: +currentSale.quantity } });
    
                const updateProduct = await Product.updateOne(
                    { _id: productId, quantity: { $gte: req.body.quantity || currentSale.quantity } },
                    { $inc: { quantity: -(req.body.quantity || currentSale.quantity) } }
                );
    
                if (updateProduct.modifiedCount == 0) {
                    return res.status(422).send({ error: true, message: 'There is not enough product quantity for this sale.' });
                }
            }
    
            // If only quantity changed:
            if (req.body?.quantity) {
                const difference = req.body.quantity - currentSale.quantity;
                const updateProduct = await Product.updateOne(
                    { _id: currentSale.productId, quantity: { $gte: Math.abs(difference) } },
                    { $inc: { quantity: -difference } }
                );
    
                if (updateProduct.modifiedCount == 0) {
                    return res.status(422).send({ error: true, message: 'There is not enough product quantity for this sale.' });
                }
            }
    
            // Update Sale document:
            const data = await Sale.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
    
            res.status(202).send({
                error: false,
                data,
                new: await Sale.findOne({ _id: req.params.id })
            });
        } catch (error) {
            res.status(500).send({ error: true, message: error.message });
        }
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

        // Mevcut işlemdeki adet bilgisi al:
        const currentSale = await Sale.findOne({ _id: req.params.id })

        // Delete:
        const data = await Sale.deleteOne({ _id: req.params.id })

        // Product quantity'den adeti eksilt:
        const updateProduct = await Product.updateOne({ _id: currentSale.productId }, { $inc: { quantity: +currentSale.quantity } })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },

}