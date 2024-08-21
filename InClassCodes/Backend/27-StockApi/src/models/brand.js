"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// {
//     "name": "Brand-1",
//     "iamge" : "http://"
// }

// Brand Model:

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: {
        type: String,
        trim: true
    },
    firmIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Firm'
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
},{
    collection: 'brands',
    timestamps: true
});


module.exports = mongoose.model('Brand', BrandSchema)