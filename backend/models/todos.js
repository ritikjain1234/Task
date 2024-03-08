const mongoose = require("mongoose");

const todoData = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Todoinfo = new mongoose.model("todolist",todoData);

module.exports = Todoinfo;