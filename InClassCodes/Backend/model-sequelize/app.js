"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// app.all('/', (req, res) => {
//     res.send('WELCOME TO TODO API')
// })


// asyn errors handle

require('express-async-errors')

/* ------------------------------------------------------- */


// MODELS:
// Model , lazım olan yerde import edilecek. (todo.router)
// const Todo = require('./app/models/todo.model')



// ROUTES:
app.use(require('./app/routes/todo.router'))


// ErrorHAndler:

app.use(require('./app/middlewares/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));