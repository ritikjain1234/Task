const User = require("../models/user");
const bcrypt = require('bcrypt');

const Userlogin = async(req,res)=>{
    try {
        const userData  = await User.findOne({email:req.body.email});
        if(userData === null){
          return  res.json({ "msg" : "User Not Found"});
        }
        const isMatch = await bcrypt.compare(req.body.password,userData.password);
        // console.log(isMatch);
        if(isMatch){

            const token = await userData.generateAuthToken();
          res.send({token,userData,"msg":"login done"});
        }else{
            res.json({"msg":"Password Don't Matched"});
        }
        // console.log(userData);
    } catch (error) {
     res.status(400).send(error)   
    }
}

const UserCreate = async(req,res) =>{
    try {
        console.log(req.body);
        const userData  = await User.findOne({email:req.body.email});
        if(userData === null){
            const userData = await User.create(req.body);
            console.log(userData);
            
            const token = await userData.generateAuthToken();
             res.send("Your Account Has Been Created Successfully");
    
        }
        else{
            // console.log(userData);
            res.send("user already exits");
        }
           } catch (error) {
        // console.log(error);
        res.status(400).send(error);
    }
}
module.exports = {Userlogin,UserCreate};