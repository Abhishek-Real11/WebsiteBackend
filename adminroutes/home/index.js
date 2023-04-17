const express = require("express");
const router = express.Router();
const {
  uploadLogo,
  getLogo,
  deleteLogo,
  updateLogoStatus
} = require("../../adminControllers/logoController");
const verify = require("../../middlewares/verify");
const { createNavBar, getNavBar } = require("../../adminControllers/navBarController");
const {
  uploadfile,
  getFile,
  updateFileStatus,
  deleteFile,
} = require("../../adminControllers/fileUploadController");
const { createSquareBox, get } = require("../../adminControllers/squareBoxControlller");
const {
  create,
  getContent,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
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

const upload1 = require("../../config/multer");

router.post("/addLogo", [upload1.single("image")], uploadLogo);
router.get("/getLogo", verify, getLogo);
router.delete("/deleteLogo", verify, deleteLogo);
router.post("/updateLogoStatus",verify,updateLogoStatus);


router.post("/createNavBar", verify,createNavBar);
router.get("/getNavBar", verify, getNavBar);

router.post("/addbanner", [upload1.single("image")], uploadfile);
router.get("/getbanner", verify, getFile);
router.post("/updateBannerStatus", updateFileStatus);
router.delete("/deleteImage", deleteFile);

router.post("/create/squareBox", [upload1.single("image")], createSquareBox);
router.get("/get/squareBox", verify, get);

router.post("/createContent", create);
router.get("/getContent", verify, getContent);
router.post("/updateContentStatus", updateStatus);
router.delete("/deleteContent", deleteFile);
router.get("/content/:slug", getSlug);
router.post("/editContent", editContent);

router.post("/addTestimonial", [upload1.single("image")], addTestimonial);
router.get("/getTestimonial", verify, getTestimonial);
router.post("/updateTestimonialStatus", updateTestimonialStatus);
router.delete("/deleteTestimonial", deleteTestimonial);

router.post("/addfaqs", addfaqs);
router.get("/getfaqs", verify, getfaqs);
router.post("/updateFaqStatus", updateFaqsStatus);
router.delete("/deleteFaqs", deleteFaqs);

module.exports = router;