const express = require('express');
const router = express.Router();

const { BODY } = require('../../constants/request-properties.constant');
const { login, signup } = require('../../controllers/auth.controller');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const { loginSchema, signupSchema } = require('../../validators/auth.validator');

router.post('/signup', requestValidatorMiddleware([signupSchema], [BODY]), signup);

router.post('/login', requestValidatorMiddleware([loginSchema], [BODY]), login);

module.exports = router;