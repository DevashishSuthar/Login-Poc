const mongoose = require('mongoose');
const crypto = require('crypto');
const { Schema } = mongoose;

const { USER } = require('../constants/models.constant');
const { jwtGenerator } = require('../helpers/jwt.helper');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      requied: true,
    },
    lastName: {
      type: String,
      requied: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    profileImage: { type: String },
    hash: { type: String },
    salt: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.hash;
        delete ret.salt;
      },
    },
  }
);

// DON'T USE arrow functions while defining methods on mongoose schema
userSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password.toString(), this.salt, 10000, 512, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
};

userSchema.methods.generateJWT = function () {
  const userDetailObj = {
    _id: this._id,
    email: this.email,
  };
  return jwtGenerator(userDetailObj);
};

userSchema.methods.toJson = function (actionType) {
  const obj = {
    _id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    profileImage: this.profileImage,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
  if (actionType === 'login') {
    obj['token'] = this.generateJWT();
  }
  delete obj.hash;
  delete obj.salt;
  return obj;
};

module.exports = mongoose.model(USER, userSchema);