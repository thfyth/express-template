const mongoose = require("mongoose");
const { Time } = require("./baseModel");
const Schema = mongoose.Schema;
const SubscribeSchema = new Schema({
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  channle: {
    type: mongoose.ObjectId,
    required: true,
    ref: "User",
  },
  ...Time,
});

module.exports = { SubscribeSchema };
