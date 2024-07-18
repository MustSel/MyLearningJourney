"use strict";

/* ------------------------------------------------------- */

// Password Encypt (PBKDF2 Method)

const crypto = require('node:crypto')

// Parameters:

const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10000  // Döngü sayısı
const charCount = 32  // write 32 for 64
const encType = 'sha512'  // Şifreleme algoritması


//Return encrypted password:
module.exports = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}
