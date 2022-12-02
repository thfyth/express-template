const mongoose = require("mongoose");
const md5 = require("../utils/md5");
const { Time } = require("./baseModel");
const Schema = mongoose.Schema;
const UserModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value) => md5(value),
  },
  ...Time,
});

module.exports = { UserModel };
