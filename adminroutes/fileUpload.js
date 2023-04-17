const express = require("express");
const router = express.Router();
const {
  uploadfile,
  getFile,
  updateFileStatus,
  deleteFile,
} = require("../adminControllers/fileUploadController");
const verify = require("../middlewares/verify");

const upload1 = require("../config/multer");

router.post("/addbanner", [upload1.single("image")], uploadfile);
router.get("/getbanner", verify, getFile);
router.post("/updateBannerStatus", updateFileStatus);
router.delete("/deleteImage", deleteFile);

module.exports = router;
