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
// SEQUELIZE:

const { Sequelize, DataTypes } = require('sequelize')

// Connection:

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

//Sequelize Model:
//sequelize.define('tableName', {...columns})
const Todo = sequelize.define('todos', {

    // ID sütunu belirtmeye gerek yok. Sequelize ID sütununu oto olarak oluşturur.
    /* id: {
        type: DataTypes.INTEGER, // DataType // sütun veri tipi
        allowNull: false, // default: true // sütun verisi boş olabilir mi?
        unique: true, // default: false // benzersiz kayıt mı?
        defaultValue: '', // kayıt eklendiğinde default olarak ne yazsın?
        comment: 'yorum ekleyebiliriz',
        primaryKey: true, // default: false // tablonun her bir kaydını ifade eden benzersşz numara
        autoIncrement: true, // default: false // sütun değeri her bir kayıtta oto olarak +1 artsın mı?
        field: 'custom_field_name'
    }, */

    title: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    description: DataTypes.TEXT,
    priority: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    mustsel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }

    // CreatedAt ve UpdatedAt oluşturmaya gerek yok, kendisi oluşturur.
})

// Syncronization: (Bir kere çalıştır.)
// Modelleri veritabanına uygula:
// sequelize.sync() // CREATE TABLE // First Command.
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP


// Connect to DB:

sequelize.authenticate().then(() => console.log('DB Connected')).catch(() => console.log('DB not Connected'))


// ROUTES:

const router = express.Router()

// LIST TODOS
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll() // sayısıyla birlikte tüm kayıtları getirir. 
    
    res.status(200).send({
        error: false,
        result: data
    })
})

// CREATE TODO

router.post('/', async (req, res) => {

    const receivedData = req.body
    console.log(receivedData)

    // const data = await Todo.create({
    //     title: receivedData.title,
    //     description: receivedData.description,
    //     priority: receivedData.priority,
    //     isdone: receivedData.isDone
    // })

    const data = await Todo.create(req.body)

    res.status(201).send({
        error: false,
        result: data.dataValues
    })
})


app.use(router)






const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));