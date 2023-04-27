const express = require("express");
const router = express.Router();
const {
  addDownloadBanner,
  getDownloadBanner,
  updateDwonloadBannerStatus,
  deleteDownloadBanner
} = require("../../adminControllers/downloadBannerController");

const upload1 = require("../../config/multer");

const {
  createSquareBox,
  get,
  updateSquareBoxStatus,
  editSquareBox,
} = require("../../adminControllers/squareBoxControlller");

const verify = require("../../middlewares/verify");

router.post("/addDownloadBanner",[verify,upload1.single("image")], addDownloadBanner);
router.get("/getDownloadBanner", verify, getDownloadBanner);
router.post("/updateDwonloadBannerStatus", verify,updateDwonloadBannerStatus);
router.delete("/deleteDownloadBanner", verify,deleteDownloadBanner);

router.post("/createSquareBox",[verify,upload1.single("image")], createSquareBox);
router.get("/getSquareBox", verify, get);
router.post("/updateSquareBoxStatus", verify, updateSquareBoxStatus);
router.post("/editSquareBox", verify, editSquareBox);

module.exports = router;
