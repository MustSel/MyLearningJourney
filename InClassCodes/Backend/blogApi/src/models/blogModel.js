"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose

const mongoose = require('mongoose')

// Blog Model

// const ModelName = new mongoose.Schema({...fields},{...settings})

// const ModelSchema = mongoose.Schema({

//     // PrimaryKey (_id) tanımlamaya gerek yok. oto tanımlanır.
//     // _id: Number

//     fieldName: {
//         type: Number,
//         default: null,
//         trim: true,
//         unique: true,
//         index: true, // Aramalarda hızlı erişim sağlar. 
//         // required: true,
//         required: [true, 'Bu alan zorunludur'], // hata mesajını ekleyebiliriz.
//         // enum: [1,2,3], // girilebilecek değerleri sınırlandırıyoruz
//         enum: [[1,2,3], 'Bu değerlerden birini girmelisiniz: 1,2,3'], // hata mesajı ekleyebiliriz
//         // validate: (data) => true, // Gelen datanın formatını kontrol etme
//         validate: [
//             (data) => true,
//             'Gönderilen data formatı yanlıştır'
//         ],
//         get: (data) => data, // Bu field'a erişilmek istendiğinde oto olarak çalışan fonksiyon
//         set: (data) => data, // Bu field'a veri kaydetmek istendiğinde oto çalışan fonksiyon
//     }

//    fieldname: String,  //diğer alanlara ihtiyaç yoksa bu şekilde shorthand kullanabilirz.

// }, {
//     collection: 'tableName', // Tablo İsmi
//     timestamps: true // createdAt ve updatedAt oto yönetilsin. (tanımlamaya gerek yok)
// })

// const ModelName = mongoose.model('ModelName', ModelSchema)


/* ------------------------------------------------------- */

// BlogCategory Schema:

const BlogCategorySchema = new mongoose.Schema({
    // _id
    name: {
        type: String,
        trim: true,
        required: true
    }
},{
    collection: 'blogCategories',
    timestamps: true
})

// Set Model
const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema)

/* ------------------------------------------------------- */

// BlogPost Schema:
const BlogPostSchema = new mongoose.Schema({
    // _id

    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, // hexadecimal formatta 
        ref: 'BlogCategory', // Id hangi modele ait
        required: true,

    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    //createdAt
    //updatedAt

},{
    collection: 'blogPosts',
    timestamps: true
})

// Set Model:
 const BlogPost = mongoose.model('BlogPost', BlogPostSchema )

 module.exports = {
    BlogCategory,
    BlogPost

 }