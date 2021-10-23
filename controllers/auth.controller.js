const passport = require('passport');

const { BAD_REQUEST } = require('../constants/http-status-code.constant');
const { AUTH_MESSAGES } = require('../constants/messages.constant');
const apiHelper = require('../helpers/api.helper');
const userService = require('../services/user.service');

const login = (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    async (err, user, info) => {
      if (err) throw err;
      if (info && info.hasOwnProperty('errors')) {
        return apiHelper.failure(res, info.errors, [], BAD_REQUEST);
      }
      if (user) {
        return apiHelper.success(res, AUTH_MESSAGES.LOGIN, { user: user.toJson('login'), });
      }
    }
  )(req, res, next);
};

const signup = async (req, res) => {
  try {
    const { body } = req;
    const email = body.email.toLowerCase();
    const isEmailExists = await userService.getUser({ email });
    if (isEmailExists && Object.keys(isEmailExists).length) {
      return apiHelper.failure(res, AUTH_MESSAGES.EMAIL_EXISTS, [], BAD_REQUEST);
    }
    const user = await userService.createUser(body);
    if (user && Object.keys(user).length) {
      return apiHelper.success(res, AUTH_MESSAGES.SIGNUP, { user: user.toJson(), });
    }
    return apiHelper.failure(res, AUTH_MESSAGES.SIGNUP_ERROR, [], BAD_REQUEST);
  } catch (error) {
    return apiHelper(res, error.message);
  }
};

module.exports = {
  login,
  signup,
};