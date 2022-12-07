const mongoose = require("mongoose");
const { UserSchema } = require("./userModel");
const { VideoSchema } = require("./videoModel");
const { SubscribeSchema } = require("./subscribeModel");
const { mongodbUrl } = require("../../config/config.default");
async function main() {
  await mongoose.connect(mongodbUrl);
}
main()
  .then((res) => {
    console.log(res, "链接mongo成功");
  })
  .catch((err) => {
    console.log(err);
  });
// main();

module.exports = {
  User: mongoose.model("User", UserSchema),
  Video: mongoose.model("Video", VideoSchema),
  Subscribe: mongoose.model("Video", SubscribeSchema),
};
