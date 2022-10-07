const express = require("express");
const router = express.Router();
const listsController = require("../module");

router.get("/", listsController.getLists);
router.post("/", listsController.postLists);
router.delete('/:id', listsController.deleteList)

module.exports = router;
