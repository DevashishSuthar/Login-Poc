const express = require('express');
const router = express.Router();

router.use('/auth', require('./api/auth.route'));
router.use('/users', require('./api/user.route'));

module.exports = router;
