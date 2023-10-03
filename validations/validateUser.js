
const Joi = require("joi");
const createValidator = require("./createValidator");

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  auth_id: Joi.string().required()
});

module.exports = createValidator(userSchema);