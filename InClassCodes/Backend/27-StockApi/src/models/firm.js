"use strict"

const { mongoose } = require("../configs/dbConnection")

/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

// Firm Model:

const FirmSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    brands: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    }]
},{
    collection:'firms',
    timestamps: true
});


/* ------------------------------------------------------- */
module.exports = mongoose.model('Firm', FirmSchema)