const { User } = require("../model/index");
exports.register = async function (req, res) {
  console.log(req.body);

  const r = await new User(req.body).save();
  res.status(200).json({
    code: 200,
    data,
    msg: "注册成功",
  });
};

exports.login = async function (req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    res.status(400).json({
      code: 400,
      data: user,
      msg: "该用户不存在!",
    });
  } else {
    const pwd = await User.findOne({ password });
    if (pwd) {
      res.status(200).json({
        code: 200,
        data: pwd,
        msg: "登陆成功",
      });
    } else {
      res.status(400).json({
        code: 400,
        data: pwd,
        msg: "密码错误!",
      });
    }
  }
};
