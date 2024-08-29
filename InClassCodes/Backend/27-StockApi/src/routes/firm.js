"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/firm:

const firm = require('../controllers/firm')
const permissions = require('../middlewares/permissions')

// URL: /firms

// router.use(permissions.isAdmin)

router.route('/')
    .get(permissions.isLogin, firm.list)
    .post(permissions.isLogin, firm.create)

// router.param('id', permissions.isAdmin);
router.route('/:id')
    .get(firm.read)
    .put(firm.update)
    .patch(firm.update)
    .delete(firm.delete)

/* ------------------------------------------------------- */
// Exports:
module.exports = router