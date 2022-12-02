var express = require("express");
var router = express.Router();
const { register } = require("../controller/user");
const { registerValidator } = require("../middware/Validator");
router.post("/register", registerValidator, register);

module.exports = router;
