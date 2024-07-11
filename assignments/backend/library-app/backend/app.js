"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000', // İzin verilecek frontend uygulamasının kaynağı
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilecek HTTP metotları
    allowedHeaders: ['Content-Type', 'Authorization'] // İzin verilecek HTTP başlıkları
}));

require('dotenv').config()
const PORT = process.env.PORT || 8000

app.use(express.json())

require('express-async-errors')


app.use(require('./app/routes/library.router'))

app.use(require('./app/middlewares/errorHandler'))


app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));