const { User } = require("../model/index");
exports.register = async function (req, res) {
  console.log(req.body);
  const r = await new User(req.body).save();
  const data = r.toJSON();
  delete data.password;
  res.status(200).json({
    code: 200,
    data,
    msg: "注册成功",
  });
};
