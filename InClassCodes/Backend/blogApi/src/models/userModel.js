"use strict";

const { Schema, model } = require('mongoose')

// Password Encypt (PBKDF2 Method)

const crypto = require('node:crypto')

// Parameters:

const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10000  // Döngü sayısı
const charCount = 32  // write 32 for 64
const encType = 'sha512'  // Şifreleme algoritması


//Return encrypted password:
const passwordEncrypt = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}

const UserSchema = new Schema({

    email: {
        type: String,
        trim: true,
        required: [true, 'email zorunludur'],
        unique: true,
        // validate: (email) => { // return true ise kaydeder.
        //     if(email.includes('@') && email.includes('.')) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }
        // validate: (email) => (email.includes('@') && email.includes('.'))
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Email type is incorrect'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'password zorunludur'],
        // set: (password) => passwordEncrypt(password)
        set: passwordEncrypt

    },

    firstName: String,
    lastName: String

}, {
    collection: 'users',
    timestamps: true
})

module.exports.User = model('User', UserSchema)