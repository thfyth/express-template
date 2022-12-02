const { body } = require("express-validator");
const errorBack = require("./errorBack");
module.exports = {
  registerValidator: errorBack([
    body("username")
      .notEmpty()
      .withMessage("用户名不能为空")
      .isEmail()
      .withMessage("用户名必须是邮箱!"),
    body("password").isLength({ min: 5 }),
  ]),
};
