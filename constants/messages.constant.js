const AUTH_MESSAGES = {
  SIGNUP: 'User signup successfully!',
  SIGNUP_ERROR: 'Unable to sign up user!',
  LOGIN: 'User login successfully!',
  LOGIN_ERROR: 'Invalid email or password!',
  EMAIL_EXISTS: 'Email already exists!',
};

const USER_MESSAGES = {
  CREATE_ERROR: 'Unable to create user!',
  UPDATE_ERROR: 'Unable to update user!',
  GET_ERROR: 'Unable to fetch requested user!',
  UPLOAD_IMAGE: 'User profile image uploaded successfully!',
  UPLOAD_IMAGE_ERROR: 'Unable to upload user profile image!',
};

const JWT_MESSAGES = {
  UNAUTHORIZED_ACCESS_TOKEN: 'Unauthorized access token!',
  FORBIDDEN_ACCESS: '403 Error! forbidden access!',
};

const COMMON_MESSAGES = {
  ROUTE_NOT_EXISTS: 'Requested route does not exists!',
  VALIDATION_ERROR: 'Data validation failed!',
  FILE_FORMAT_REQUIRED: 'Only .jpg, .jpeg & .png format allowed!',
  FILE_REQUIRED: 'File required!',
  UNKNOWN_ERROR: 'Something went wrong, please try again later!',
  NO_DATA_FOUND: 'No data found!',
};

module.exports = {
  AUTH_MESSAGES,
  USER_MESSAGES,
  JWT_MESSAGES,
  COMMON_MESSAGES,
};