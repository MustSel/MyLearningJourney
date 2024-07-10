"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

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


// MODEL EXPORT

module.exports = Todo