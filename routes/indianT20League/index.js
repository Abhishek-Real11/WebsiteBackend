const express = require("express");
const router = express.Router();
const { getLogo } = require("../../controllers/logoController");

const {
  getContent,
  getContentBySubType,
} = require("../../controllers/contentController");

const { getFile } = require("../../controllers/fileUploadController");

const {
  getAppFeaturesImage,
} = require("../../controllers/appFeaturesImageController");
const { getImage } = require("../../controllers/aboutUsBottomImageController");
const { getTestimonial } = require("../../controllers/testimonialController");
const { getSquareBox } = require("../../controllers/squareBoxControlller");
const { getIndianT20League } = require("../../controllers/indain-T20-LeagueController");

router.get("/getLogo", getLogo);

router.get("/getContent", getContent);
router.get("/getContentBySubType", getContentBySubType);
router.get("/getbanner", getFile);
router.get("/getAppFeaturesImage", getAppFeaturesImage);
router.get("/getBottomImage", getImage);
router.get("/getSquareBox", getSquareBox);
router.get("/getTestimonial", getTestimonial);
router.get("/getIndianT20League", getIndianT20League);

module.exports = router;
