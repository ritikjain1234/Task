const {joiValdates,joiValdatesPatch,userCreateValidation} = require("./index");

const middle = (schema) => {
return async(req,res,next) => {
    const datajoi = schema.validate(req.body);
    if(datajoi.error){
        res.status(403).send(datajoi);
    }
    else{
        next();
    }
} 
}


module.exports = {middle,joiValdates,joiValdatesPatch,userCreateValidation};