const { BAD_REQUEST } = require('../constants/http-status-code.constant');
const { USER_MESSAGES, COMMON_MESSAGES } = require('../constants/messages.constant');
const apiHelper = require('../helpers/api.helper');
const userService = require('../services/user.service');

const uploadProfileImageOfUser = async (req, res) => {
  try {
    const { params, file, fileValidationError } = req;
    if (fileValidationError) {
      return apiHelper.failure(res, COMMON_MESSAGES.FILE_FORMAT_REQUIRED, [], BAD_REQUEST);
    }
    if (!file) {
      return apiHelper.failure(res, COMMON_MESSAGES.FILE_REQUIRED, [], BAD_REQUEST);
    }
    const body = {};
    const { destination, filename } = file;
    const index = destination.indexOf('/');
    const destinationPath = destination.substring(index + 1);
    const filePath = `${destinationPath}/${filename}`;
    body['profileImage'] = filePath;
    const { id: _id } = params;

    const user = await userService.updateUser({ _id }, body);
    if (user && Object.keys(user).length) {
      return apiHelper.success(res, USER_MESSAGES.UPLOAD_IMAGE, { filePath });
    }
    return apiHelper.failure(res, USER_MESSAGES.UPLOAD_IMAGE_ERROR, [], BAD_REQUEST);
  } catch (error) {
    return apiHelper.failure(res, error.message);
  }
};

module.exports = {
  uploadProfileImageOfUser
};