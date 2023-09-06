const Joi = require("joi");
const createValidator = require("./createValidator");

const questionSchema = Joi.object({
    prompt: Joi.string().required(),
    quiz_id: Joi.number().required(),
    prompt_type_id: Joi.number().required(),
});

module.exports = createValidator(questionSchema);