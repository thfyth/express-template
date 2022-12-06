// const token = require("jsonwebtoken");
const fs = require("fs");
const { User } = require("../model/index");
const { createToken } = require("../utils/jwt");
const { promisify } = require("util");
const rename = promisify(fs.rename);
exports.register = async function (req, res) {
  console.log(req.body);

  const data = await new User(req.body).save();
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
    const pwd = await User.findOne({ username, password });
    if (pwd) {
      const data = pwd.toJSON();
      console.log(data);
      // data.token = token.sign(data, "thf-video-ss-1as-ss-asd-asd");
      data.token = await createToken(data);
      res.status(200).json({
        code: 200,
        data,
        msg: "登陆成功",
      });
      // console.log(pdw);
    } else {
      res.status(400).json({
        code: 400,
        data: pwd,
        msg: "密码错误!",
      });
    }
  }
};

exports.list = async function (req, res) {
  res.send("list");
};

exports.update = async function (req, res) {
  const { _id } = req.user.userinfo;
  // console.log(req.userinfo._id, "-------", _id, req.body);
  const back = await User.findByIdAndUpdate(_id, req.body, { new: true });
  res.send(back);
};

exports.uploadHeaderImage = async function (req, res) {
  // upload()
  console.log(req.file);
  const { originalname, filename } = req.file;
  const length = originalname.split(".").length;
  const postfix = originalname.split(".")[length - 1];
  console.log(length, filename + "." + postfix);
  res.send("上传文件");
  rename("public/file/" + filename, "public/file/" + filename + "." + postfix);
};
