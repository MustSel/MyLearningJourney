"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require('mongoose')

const dbConnection = function() {
    // Connect:
    mongoose.connect(process.env.MONGODB)
      .then(() => console.log('Database connected!'))
      .catch(err => console.log('Database connection error:', err));
}

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
} 