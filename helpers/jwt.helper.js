const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../configs/env.config');

const jwtGenerator = (userData) => {
  return jwt.sign({ ...userData }, JWT_SECRET_KEY, { expiresIn: '1h' });
};

module.exports = {
  jwtGenerator,
};