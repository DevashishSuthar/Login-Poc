const Joi = require('joi');

const email = Joi.string().email().required();

const loginSchema = Joi.object().keys({
  email,
  password: Joi.string().required(),
});

const signupSchema = Joi.object().keys({
  firstName: Joi.string().min(3).max(15).required(),
  lastName: Joi.string().min(3).max(15).required(),
  password: Joi.string().min(5).required(),
  email,
});

module.exports = {
  loginSchema,
  signupSchema,
};