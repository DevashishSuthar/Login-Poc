const dotenv = require('dotenv');
dotenv.config();

const {
  NODE_ENV,
  PORT,
  DB_URI,
  JWT_SECRET_KEY,
} = process.env;

module.exports = {
  NODE_ENV,
  PORT,
  DB_URI,
  JWT_SECRET_KEY,
};