const express = require("express");
const router = express.Router();
const listsRouter = require("./lists.routes");

router.use("/lists", listsRouter);

module.exports = router;
