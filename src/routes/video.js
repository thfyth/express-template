var express = require("express");
var router = express.Router();
const upload = require("../utils/upload");
const { verifyToken } = require("../utils/jwt");
const { videoValidator } = require("../middware/validator");
const { uploadVideo } = require("../controller/video");
router.post("/upload", verifyToken, videoValidator, uploadVideo);

module.exports = router;
