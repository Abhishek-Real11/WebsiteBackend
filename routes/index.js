const express = require("express");

const fileupload = require("./fileUpload");
const faqs = require("./faqs");
const testimonial = require("./testimonial");
const content = require("./content");
const footer = require("./Footer");
const home = require("./Home/index");
const aboutUs = require("./about_us/index");
const indianT20League = require("./indianT20League/index");
const router = express.Router();

// router.use("/", fileupload);
router.use("/", faqs);

router.use("/", testimonial);
router.use("/", content);
router.use("/", footer);
router.use("/home", home);
router.use("/aboutUs", aboutUs);
router.use("/indianT20League", indianT20League);

//indianT20League/
module.exports = router;
