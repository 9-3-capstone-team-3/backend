const Joi = require("joi");
const createValidator = require("./createValidator");

const quizSchema = Joi.object({
    name: Joi.string().required(),
    level_id: Joi.string().required(),
});

module.exports = createValidator(quizSchema);