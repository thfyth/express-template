const token = require("jsonwebtoken");
const { promisify } = require("util");
const toJwt = promisify(token.sign);
const verify = promisify(token.verify);
const key = "thf-video-ss-1as-ss-asd-asd";
module.exports = {
  createToken: async (userinfo) => {
    return await toJwt({ userinfo }, key, {
      expiresIn: 60 * 60 * 24,
    });
  },
  verifyToken: async (req, res, next) => {
    var token = req.headers.authorization;
    token = token ? token.split("Bearer ")[1] : null;
    if (!token) {
      res.status(401).json({
        code: 401,
        msg: "登陆已过期",
        data: null,
      });
    }
    try {
      const userinfo = await verify(token, key);
      console.log(userinfo);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        code: 401,
        msg: "无效token",
        data: null,
      });
    }
  },
};
