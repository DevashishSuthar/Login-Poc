const { USER_MESSAGES } = require('../constants/messages.constant');
const User = require('../models/user.model');

const createUser = async (body) => {
  try {
    const { password } = body;
    const userInstance = new User(body);
    userInstance.setPassword(password);
    return await userInstance.save();
  } catch (error) {
    throw Error(USER_MESSAGES.CREATE_ERROR);
  }
};

const updateUser = async (query, body) => {
  try {
    return await User.findOneAndUpdate(query, body, { new: true });
  } catch (error) {
    throw Error(USER_MESSAGES.UPDATE_ERROR);
  }
};

const getUser = async (query) => {
  try {
    return await User.findOne(query);
  } catch (error) {
    throw Error(USER_MESSAGES.GET_ERROR);
  }
};

module.exports = {
  createUser,
  updateUser,
  getUser,
};