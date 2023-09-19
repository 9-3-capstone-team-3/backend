
const Joi = require("joi");
const createValidator = require("./createValidator");

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).required(),

  level_number: Joi.number().required(),
});

module.exports = createValidator(userSchema);