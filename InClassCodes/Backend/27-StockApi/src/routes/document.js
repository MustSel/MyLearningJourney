"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const path = require('path');
// routes/document:

// URL: /documents

router.all('/', (req, res) => {
    res.send({
        swagger: "/documents/swagger",
        redoc: "/documents/redoc",
        json: "/documents/json",
    })
})

// JSON:
router.use('/json', (req, res) => {
    res.sendFile(path.join(__dirname, '../../swagger.json'));
});

// Redoc:
const redoc = require('redoc-express')
router.use('/redoc', redoc({ specUrl: '/documents/json', title: 'API Docs' }))

// Swagger:
const swaggerUi = require('swagger-ui-express')
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(require('../../swagger.json'), { swaggerOptions: { persistAuthorization: true } }))

/* ------------------------------------------------------- */
module.exports = router