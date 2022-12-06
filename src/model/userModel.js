const mongoose = require("mongoose");
const md5 = require("../utils/md5");
const { Time } = require("./baseModel");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
    select: false,
  },
  // 头像
  image: {
    type: String,
    default: null,
  },
  // 频道图片
  cover: {
    type: String,
    default: null,
  },
  // 频道
  channeldes: {
    type: String,
    default: null,
  },
  ...Time,
});

module.exports = { UserSchema };
