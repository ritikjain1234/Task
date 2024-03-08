const joi = require("joi");

const joiValdates = joi.object({
    task:joi.string().required()
});


const userCreateValidation = joi.object({
    email:joi.string().required().trim(),
    fname:joi.string().trim(),
    password:joi.string().required()
});

module.exports = {joiValdates,userCreateValidation};