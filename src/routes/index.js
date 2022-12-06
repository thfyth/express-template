var express = require("express");
var router = express.Router();

router.use("/users", require("./users"));
router.use("/video", require("./video"));
module.exports = router;
