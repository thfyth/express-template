var express = require("express");
var router = express.Router();
const { register, login } = require("../controller/user");
const { registerValidator, loginValidator } = require("../middware/Validator");
router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);

module.exports = router;
