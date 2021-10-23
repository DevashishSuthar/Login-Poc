const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const { AUTH_MESSAGES } = require('../constants/messages.constant');
const userService = require('../services/user.service');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await userService.getUser({ email });
        if (user && Object.keys(user).length) {
          if (!user.validPassword(password)) {
            return done(null, false, { errors: AUTH_MESSAGES.LOGIN_ERROR, });
          }

          return done(null, user);
        }
        return done(null, false, { errors: AUTH_MESSAGES.LOGIN_ERROR, });
      } catch (error) {
        throw error;
      }
    }
  )
);

module.exports = passport;