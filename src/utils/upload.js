const multer = require("multer");
var RPCClient = require("@alicloud/pop-core").RPCClient;
const { accessKeyId, accessKeySecret } = require("../../config/config.default");

function initVodClient(accessKeyId, accessKeySecret) {
  var regionId = "cn-shanghai"; // 点播服务接入地域
  var client = new RPCClient({
    //填入AccessKey信息
    accessKeyId,
    accessKeySecret,
    endpoint: "http://vod." + regionId + ".aliyuncs.com",
    apiVersion: "2017-03-21",
  });
  return client;
}
// 阿里云上传视频图片
var clientUpload = initVodClient(accessKeyId, accessKeySecret);

const upload = multer({ dest: "public/file/" });

module.exports = {
  upload,
  clientUpload,
};
