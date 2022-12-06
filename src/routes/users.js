var express = require("express");
var router = express.Router();
const { upload } = require("../utils/upload");
const { verifyToken } = require("../utils/jwt");
const {
  register,
  login,
  list,
  update,
  uploadHeaderImage,
} = require("../controller/user");
const {
  registerValidator,
  loginValidator,
  updateValidator,
} = require("../middware/Validator");
router
  .post("/register", registerValidator, register)
  .post("/login", loginValidator, login)
  .get("/list", verifyToken, list)
  .put("/update", verifyToken, updateValidator, update)
  .post(
    "/uploadHeaderImage",
    verifyToken,
    upload.single("headerImage"),
    uploadHeaderImage
  );

module.exports = router;
