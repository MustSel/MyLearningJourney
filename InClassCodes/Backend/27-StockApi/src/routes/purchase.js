"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require("../controllers/purchase");
const permissions = require("../middlewares/permissions");

// URL: /purchases

router.use(permissions.isLogin);

router.route("/").get(purchase.list).post(purchase.create);

router
  .route("/:id")
  .get(purchase.read)
  .put(purchase.update)
  .patch(purchase.update)
  .delete(purchase.delete);

/* ------------------------------------------------------- */
// Exports:
module.exports = router;
