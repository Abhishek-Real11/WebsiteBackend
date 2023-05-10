const express = require("express");

const fileupload = require("./fileUpload");
const testimonial = require("./testimonial");
const content = require("./content");
const footer = require("./Footer");
const home = require("./Home/index");
const aboutUs = require("./about_us/index");
const indianT20League = require("./indianT20League/index");
const router = express.Router();
const privacy_policy = require("./privacy-policy/index");
const faqs = require("./faqs/index");
const download = require("./download/index");
const TermsAndCondition = require("./TermsAndCondition/index");
const HowToPlay = require("./How-To-Play/index");
const FantasySports = require("./Fantasy-Sports/index");
const PressRelease = require("./Press-Release/index");
// router.use("/", fileupload);
const Footer=require("./Footer/index");

router.use("/", testimonial);
router.use("/", content);
router.use("/", footer);
router.use("/home", home);
router.use("/aboutUs", aboutUs);
router.use("/indianT20League", indianT20League);
router.use("/privacy_policy", privacy_policy);
router.use("/faqs", faqs);
router.use("/t&C", TermsAndCondition);
router.use("/download", download);
router.use("/how-to-play", HowToPlay);
router.use("/fantasy-sports", FantasySports);
router.use("/press-release", PressRelease);
router.use("/footer",Footer);
//indianT20League/
module.exports = router;
