const mongoose = require("mongoose");
const md5 = require("../utils/md5");
const { Time } = require("./baseModel");
const Schema = mongoose.Schema;
const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descrption: {
    type: String,
    required: true,
  },
  vodVideoId: {
    type: String,
    required: true,
  },
  // 头像
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  cover: {
    type: String,
    required: true,
  },
  ...Time,
});

module.exports = { VideoSchema };
