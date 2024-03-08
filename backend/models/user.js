const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    fname:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id},"ritikjn@02");
        // console.log(token);
        return token;
    } catch (error) {
        res.send(error);
        // console.log(error);
    }
}

userSchema.pre("save",  async function(next){
    // Store hash in your password DB.
    this.password = await bcrypt.hash(this.password,10);
    // console.log(this.password);
    next();
});

const User = new mongoose.model("user",userSchema);

module.exports = User;