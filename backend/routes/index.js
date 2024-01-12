const express = require("express");
const router = express.Router();

router.use("/db", require("./db.route"));
router.use("/auth", require("./auth.route"));
router.use("/todo", require("./todo.route"));

module.exports = router;