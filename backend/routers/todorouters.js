const express = require("express");
const router = express.Router();
const DotoOpertion = require("../controllers/services");
const { middle, joiValdates} = require("./valdates/mid");

router.post("/info", middle(joiValdates), DotoOpertion.postTodoData);
router.get("/info", DotoOpertion.getByIdTodoData);
router.delete("/info/:id",DotoOpertion.deleteById);

module.exports = router;