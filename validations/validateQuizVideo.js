const Joi = require("joi");
const createValidator = require("./createValidator");

const quiVideoSchema = Joi.object({
    url: Joi.string().required()
});

module.exports = createValidator(quiVideoSchema);