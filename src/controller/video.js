const { createToken } = require("../utils/jwt");
const { promisify } = require("util");

const { clientUpload } = require("../utils/upload");
const { Video } = require("../model/index");
exports.uploadVideo = async function (req, res) {
  const { _id } = req.user.userinfo;
  const body = req.body;
  body.user = _id;
  try {
    const videoModel = new Video(body);
    const data = await videoModel.save();
    res.status(200).json({ data, code: 200, msg: "保存成功" });
  } catch (error) {
    res.status(200).json({ code: 500, msg: "保存失败", data: null });
  }
  //   res.send(data);
  //   try {
  //     const response = await clientUpload.request(
  //       "CreateUploadVideo",
  //       {
  //         Title: "this is a sample",
  //         FileName: "filename.mp4",
  //       },
  //       {}
  //     );
  //     console.log("VideoId = " + response.VideoId);
  //     console.log("UploadAddress = " + response.UploadAddress);
  //     console.log("UploadAuth = " + response.UploadAuth);
  //     console.log("RequestId = " + response.RequestId);
  //     res.status(200).json({ vod: response });
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
};

exports.videoList = async function (req, res) {
  const { pageNum = 1, pageSize = 10 } = req.body;
  const list = await Video.find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize)
    .sort({ createAt: -1 })
    .populate("user");
  const count = await Video.countDocuments();
  res.send({ data: list, count, code: 200 });
};
exports.video = async function (req, res) {
  const { id } = req.params;
  if (id) {
    const data = await Video.findById(id).populate(
      "user",
      "_id username cover"
    );
    res.status(200).json({
      code: 200,
      data,
      msg: "获取成功",
    });
  } else {
    res.status(200).json({
      code: 400,
      data: null,
      msg: "获取失败",
    });
  }
};
