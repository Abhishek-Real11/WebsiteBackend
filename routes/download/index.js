const express = require("express");
const router = express.Router();
const {
  getDownloadBanner,
} = require("../../controllers/downloadBannerController");

router.get("/getDownloadBanner", getDownloadBanner);

module.exports = router;
