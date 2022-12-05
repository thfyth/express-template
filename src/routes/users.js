var express = require("express");
var router = express.Router();
const { verifyToken } = require("../utils/jwt");
const { register, login, list } = require("../controller/user");
const { registerValidator, loginValidator } = require("../middware/Validator");
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.get("/list", verifyToken, list);

module.exports = router;
