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
};
