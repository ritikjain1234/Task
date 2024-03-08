const express = require("express");
const router = express.Router();
const {Userlogin,UserCreate} = require("../controllers/userController")
const {middle,userCreateValidation} = require("./valdates/mid")

router.post("/login",Userlogin);
router.post("/",middle(userCreateValidation),UserCreate);

module.exports = router;