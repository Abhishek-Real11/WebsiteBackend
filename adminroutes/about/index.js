const express = require("express");
const router = express.Router();
const {
  uploadLogo,
  getLogo,
  deleteLogo,
  updateLogoStatus,
} = require("../../adminControllers/logoController");
const verify = require("../../middlewares/verify");
const {
  createNavBar,
  getNavBar,
  deleteNavBar,
} = require("../../adminControllers/navBarController");
const {
  uploadfile,
  getFile,
  updateFileStatus,
  deleteFile,
} = require("../../adminControllers/fileUploadController");

const {
  create,
  getContent,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
} = require("../../adminControllers/contentController");
const {
  addAppFeaturesImage,
  getAppFeaturesImage,
  updateAppFeaturesImageStatus,
  deleteAppFeaturesImage,
} = require("../../adminControllers/appFeaturesImageController");

const {
  addImage,
  getImage,
  updateImageStatus,
  deleteImage,
} = require("../../adminControllers/aboutUsBottomImageController");

const upload1 = require("../../config/multer");

router.post("/addLogo", [upload1.single("image")], uploadLogo);
router.get("/getLogo", verify, getLogo);
router.delete("/deleteLogo", verify, deleteLogo);
router.post("/updateLogoStatus", verify, updateLogoStatus);

router.post("/addbanner", [upload1.single("image")], uploadfile);
router.get("/getbanner", verify, getFile);
router.post("/updateBannerStatus", updateFileStatus);
router.delete("/deleteImage", deleteFile);

router.post("/createContent", create);
router.get("/getContent", verify, getContent);
router.post("/updateContentStatus", updateStatus);
router.delete("/deleteContent", deleteContent);
router.get("/content/:slug", getSlug);
router.post("/editContent", editContent);

router.post(
  "/addAppFeaturesImage",
  [upload1.single("image")],
  addAppFeaturesImage
);
router.get("/getAppFeaturesImage", verify, getAppFeaturesImage);
router.post("/updateAppFeaturesImageStatus", updateAppFeaturesImageStatus);
router.delete("/deleteAppFeaturesImage", deleteAppFeaturesImage);

router.post("/addImage", [upload1.single("image")], addImage);
router.get("/getImage", verify, getImage);
router.post("/updateImageStatus", updateImageStatus);
router.delete("/deleteAboutUsBottomImage", deleteImage);

module.exports = router;
