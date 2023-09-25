const Joi = require("joi");
const createValidator = require("./createValidator");

const answerSchema = Joi.object({
    answer_text: Joi.string().required(),
    is_correct: Joi.bool().required(),
    question_id: Joi.number().required(),
    prompt_type_id: Joi.number().required(),
});

module.exports = createValidator(answerSchema);