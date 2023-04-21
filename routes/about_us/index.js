const express = require("express");
const router = express.Router();
const { getLogo } = require("../../controllers/logoController");

const { getContent } = require("../../controllers/contentController");

const { getFile } = require("../../controllers/fileUploadController");

const {
  getAppFeaturesImage,
} = require("../../controllers/appFeaturesImageController");
const { getImage } = require("../../controllers/aboutUsBottomImageController");

router.get("/getLogo", getLogo);

router.get("/getContent", getContent);
router.get("/getbanner", getFile);
router.get("/getAppFeaturesImage", getAppFeaturesImage);
router.get("/getBottomImage", getImage);

module.exports = router;
