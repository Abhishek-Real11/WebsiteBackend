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
  createSquareBox,
  get,
  updateSquareBoxStatus,
  editSquareBox,
} = require("../../adminControllers/squareBoxControlller");
const {
  create,
  getContent,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
  getContentBySubType,
} = require("../../adminControllers/contentController");
const {
  addTestimonial,
  getTestimonial,
  updateTestimonialStatus,
  deleteTestimonial,
} = require("../../adminControllers/testimonialController");
const {
  addfaqs,
  getfaqs,
  updateFaqsStatus,
  deleteFaqs,
} = require("../../adminControllers/faqsController");

const {
  addIndianT20League,
  getIndianT20League,
  updateIndianT20LeagueStatus
} = require("../../adminControllers/indain-T20-LeagueController");

const upload1 = require("../../config/multer");

//Header Logo
router.post("/addLogo", [upload1.single("image")], uploadLogo);
router.get("/getLogo", verify, getLogo);
router.delete("/deleteLogo", verify, deleteLogo);
router.post("/updateLogoStatus", verify, updateLogoStatus);

//Nav Bar
router.post("/createNavBar", verify, createNavBar);
router.get("/getNavBar", verify, getNavBar);
router.delete("/deleteNavBar", verify, deleteNavBar);

//Banner Images
router.post("/addbanner", [upload1.single("image")], uploadfile);
router.get("/getbanner", verify, getFile);
router.post("/updateBannerStatus", updateFileStatus);
router.delete("/deleteBanner", deleteFile);

//SquareBox Image
router.post("/createSquareBox", [upload1.single("image")], createSquareBox);
router.get("/getSquareBox", verify, get);
router.post("/updateSquareBoxStatus", verify, updateSquareBoxStatus);
router.post("/editSquareBox", verify, editSquareBox);

//content
router.post("/createContent", create);
router.get("/getContent", verify, getContent);
router.post("/updateContentStatus", updateStatus);
router.delete("/deleteContent", deleteContent);
router.get("/content/:slug", getSlug);
router.post("/editContent", editContent);
router.get("/getContentBySubType", verify, getContentBySubType);

//TestiMonial
router.post("/addTestimonial", [upload1.single("image")], addTestimonial);
router.get("/getTestimonial", verify, getTestimonial);
router.post("/updateTestimonialStatus", updateTestimonialStatus);
router.delete("/deleteTestimonial", deleteTestimonial);

router.post("/addIndianT20League", [upload1.array("image",2)], addIndianT20League);
router.get("/getIndianT20League",getIndianT20League );
router.post("/updateIndianT20LeagueStatus", updateIndianT20LeagueStatus);

module.exports = router;