const express = require('express');
const router = express.Router();

const { PARAMS } = require('../../constants/request-properties.constant');
const { uploadProfileImageOfUser } = require('../../controllers/user.controller');
const requestValidatorMiddleware = require('../../middlewares/request-validator.middleware');
const jwtValidatorMiddleware = require('../../middlewares/jwt-validator.middleware');
const { imageUploadMiddleware } = require('../../middlewares/file-upload.middleware');
const { idParamSchmea } = require('../../validators/common.validator');

router.put(
  '/:id/upload-image',
  jwtValidatorMiddleware,
  imageUploadMiddleware,
  requestValidatorMiddleware([idParamSchmea], [PARAMS]),
  uploadProfileImageOfUser
);

module.exports = router;