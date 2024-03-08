const express = require("express");
const router = express.Router();
const todoRouter = require("./todorouters");
const userRouter = require("./userrouter");

router.use("/todo",todoRouter);
router.use("/user",userRouter);

module.exports = router;