var express = require("express");
var router = express.Router();
const { register } = require("../controller/user");
/* GET users listing. */
router.post("/register", register);

module.exports = router;
