const { createToken } = require("../utils/jwt");
const { promisify } = require("util");

const { clientUpload } = require("../utils/upload");

exports.uploadVideo = async function (req, res) {
  try {
    const response = await clientUpload.request(
      "CreateUploadVideo",
      {
        Title: "this is a sample",
        FileName: "filename.mp4",
      },
      {}
    );
    console.log("VideoId = " + response.VideoId);
    console.log("UploadAddress = " + response.UploadAddress);
    console.log("UploadAuth = " + response.UploadAuth);
    console.log("RequestId = " + response.RequestId);
    res.status(200).json({ vod: response });
  } catch (error) {
    res.status(500).json(error);
  }
};
