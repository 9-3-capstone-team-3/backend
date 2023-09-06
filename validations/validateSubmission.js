const Joi = require("joi");
const createValidator = require("./createValidator");

const submissionSchema = Joi.object({
    user_id: Joi.number().required(),
    user_answer: Joi.string().required(),
    is_correct: Joi.bool().required(),
});

module.exports = createValidator(submissionSchema);