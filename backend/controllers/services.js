const Todoinfo = require("../models/todos");

class DotoOpertion{
    constructor (){

    }
    postTodoData = async(req,res)=>{
        try {
           const dataTodo = new Todoinfo(req.body);
        //    console.log(req.body);
           const postData = await dataTodo.save();
           res.status(201).send(postData);
        } catch (error) {
            res.status(400).send(error);
        }
    }


    getByIdTodoData = async(req,res)=>{
        try {
            const allTodoData = await Todoinfo.find();
            res.send(allTodoData);
        } catch (error) {
            res.status(400).send(error);
        }
}


deleteById = async(req,res) =>{
    try {
        const dataTodo = await Todoinfo.findByIdAndDelete(req.params.id);
        // console.log(req.body);
        res.status(200).send(dataTodo);
        
    } catch (error) {
        res.status(400).send();
    }
}

}

module.exports = new DotoOpertion();