const mongoose = require("mongoose");
const { UserModel } = require("./userModel");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/thfyth");
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
  User: mongoose.model("User", UserModel),
};
