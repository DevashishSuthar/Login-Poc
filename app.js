const express = require('express');
const cors = require('cors');

// create express server
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// local imports
const { PORT } = require('./configs/env.config');
const { NOT_FOUND } = require('./constants/http-status-code.constant');
const { COMMON_MESSAGES } = require('./constants/messages.constant');
const { PUBLIC_DIR } = require('./constants/file-directories.constant');
const apiHelper = require('./helpers/api.helper');

//serving static files without using public folder
app.use(express.static(PUBLIC_DIR));

// database connection
require('./configs/db-connection.config');

// import all the models
require('./models/index.model');

// import all the routes
app.use(require('./routes/index.route'));

// import passport configuration
require('./configs/passport.config');

// import index script
require('./scripts/index.script');

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// catch 404 route and pass it to error handler
app.use((req, res, next) => {
  const error = new Error(COMMON_MESSAGES.ROUTE_NOT_EXISTS);
  error.status = NOT_FOUND;
  next(error);
});

// error handlers
app.use((err, req, res, next) => {
  apiHelper.failure(res, err.message, [], NOT_FOUND);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});