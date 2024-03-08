const mongoose = require("mongoose");

url = "mongodb://127.0.0.1:27017/todo"

const connectDb = () =>{
    try {
        console.log("database");
        return mongoose.connect(url);
    } catch (error) {
        console.log(error);
    }
}  

module.exports = connectDb;