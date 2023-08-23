
const Joi = require("joi");
const createValidator = require("./createValidator");

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.number().required(),
  level_id: Joi.number().required(),
});

module.exports = createValidator(userSchema);