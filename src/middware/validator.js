const { body } = require("express-validator");
const errorBack = require("./errorBack");
const { User } = require("../model/index");
module.exports = {
  registerValidator: errorBack([
    body("username")
      .notEmpty()
      .withMessage("用户名不能为空")
      .isEmail()
      .bail()
      .withMessage("用户名必须是邮箱!")
      .bail()
      .custom(async (val) => {
        const res = await User.findOne({ username: val });
        if (res) {
          return Promise.reject("该邮箱已经被注册了，请更换邮箱！");
        }
      })
      .bail(),
    body("password").isLength({ min: 5 }).bail(),
  ]),
  loginValidator: errorBack([
    body("username").notEmpty().withMessage("用户名不能为空").bail(),
    body("password").notEmpty().withMessage("密码不能为空").bail(),
  ]),
  updateValidator: errorBack([
    body("username").custom(async (val) => {
      console.log(val);
      const cb = await User.findOne({ username: val });
      console.log(cb);
      if (cb) {
        return Promise.reject("该用户名已存在，请修改你的名称!");
      }
    }),
    body("phone").custom(async (phone) => {
      console.log(phone);
      const cb = await User.findOne({ phone });
      if (cb) {
        return Promise.reject("该手机号已存在!");
      }
    }),
  ]),
  videoValidator: errorBack([
    body("title").notEmpty().withMessage("视频名称不能为空").bail(),
    body("vodVideoId").notEmpty().withMessage("视频ID不能为空").bail(),
  ]),
};
