"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//Accept JSON:
app.use(express.json())

// DB Connection:

// const dbConnection = require('./src/dbConnection')
// dbConnection()

require('./src/dbConnection')()

// Catch error from async

require('express-async-errors')

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// npm i cookie-session
const session = require('cookie-session')

app.use(session({
    secret: process.env.SECRET_KEY, // Cookie datası şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3 // miliSeconds
}))
/* ------------------------------------------------------- */
// Middleware for check user data from session:

app.use(require('./src/middlewares/userControl'))

/* ------------------------------------------------------- */
app.all('/', (req, res) => {
    res.send({
        message: 'WELCOME TO BLOG API',
        session:req.session,
        user: req.user,
        isLogin: (req.user ? true : false)
    })
})
/* ------------------------------------------------------- */

// Routes:

app.use('/blog', require('./src/routes/blogRouter'))
app.use('/user', require('./src/routes/userRouter'))
app.use('/auth', require('./src/routes/authRouter'))

// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))