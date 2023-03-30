const express = require("express");
const router = express.Router();
const {
  uploadfile,
  getFile,
  updateStatus,
  deleteFile,
} = require("../controllers/fileUploadController");

const upload1 = require("../config/multer");

router.post("/addbanner", [upload1.single("image")], uploadfile);
router.get("/getbanner", getFile);
router.post("/updateBannerStatus", updateStatus);
router.post("/deleteImage", deleteFile);

module.exports = router;
