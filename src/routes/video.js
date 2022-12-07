var express = require("express");
var router = express.Router();
const upload = require("../utils/upload");
const { verifyToken } = require("../utils/jwt");
const { videoValidator } = require("../middware/validator");
const { uploadVideo, videoList, video } = require("../controller/video");
router.post("/upload", verifyToken(), videoValidator, uploadVideo);
router.post("/list", verifyToken(), videoList);
router.get("/:id", verifyToken(false), video);

module.exports = router;
