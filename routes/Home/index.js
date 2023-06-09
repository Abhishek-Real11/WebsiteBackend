const express = require("express");
const router = express.Router();
const { getLogo } = require("../../controllers/logoController");
const { getNavBar } = require("../../controllers/navBarController");
const { getContent } = require("../../controllers/contentController");
const { getfaqs } = require("../../controllers/faqsController");
const { getFile } = require("../../controllers/fileUploadController");
const { getTestimonial } = require("../../controllers/testimonialController");
const { getSquareBox } = require("../../controllers/squareBoxControlller");

const { getHowToPlay } = require("../../controllers/howToPlayController");
const {getAppFeatures}=require("../../controllers/appFeaturesController")
const {getAppFeaturesImage}=require("../../controllers/appFeaturesImageController")
const {
 
    getUpcomingMatches,
  
  } = require("../../controllers/upcomingMatchesController");

router.get("/getLogo", getLogo);
router.get("/getNavBar", getNavBar);

router.get("/getContent", getContent);
router.get("/getFaqs", getfaqs);
router.get("/getbanner", getFile);
router.get("/getSquareBox", getSquareBox);
router.get("/getTestimonial", getTestimonial);
router.get("/getHowToPlay", getHowToPlay);
router.get("/getAppFeatures", getAppFeatures);
router.get("/getAppFeaturesImage", getAppFeaturesImage);
router.get("/getUpcomingMatches", getUpcomingMatches);
module.exports = router;
