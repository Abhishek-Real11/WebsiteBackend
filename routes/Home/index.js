const express = require("express");
const router = express.Router();
const { getLogo } = require("../../controllers/logoController");
const { getNavBar } = require("../../controllers/navBarController");
const { getContent } = require("../../controllers/contentController");
const { getfaqs } = require("../../controllers/faqsController");
const { getFile } = require("../../controllers/fileUploadController");
const { getTestimonial } = require("../../controllers/testimonialController");


router.get("/getLogo", getLogo);
router.get("/getNavBar", getNavBar);

router.get("/getContent", getContent);
router.get("/getFaqs", getfaqs);
router.get("/getbanner", getFile);
router.get("/getTestimonial", getTestimonial);

module.exports = router;
