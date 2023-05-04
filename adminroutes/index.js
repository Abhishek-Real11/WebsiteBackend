const express = require("express");
const userRoute = require("./userRoutes");
const fileupload = require("./fileUpload");
const footer = require("./Footer");
const router = express.Router();

const home = require("./home/index");
const aboutus = require("./about/index");
const indianT20League = require("./indianT20League/index");
const download = require("./download/index");
const privacy_policy = require("./privacy-policy/index");
const faqs = require("./faqs/index");
const TermsAndCondition = require("./TermsAndCondition/index");
const HowToPlay = require("./How-To-Play/index");
const FantasyCricket = require("./Fantasy-Cricket/index");
const PressRelease = require("./Press-Release/index");
const FooterDisclaimer=require("./Footer/index");
const CricketPoints=require("./fantasy-Points/index")

router.use("/auth", userRoute);
router.use("/", fileupload);

router.use("/", footer);

router.use("/home", home);
router.use("/aboutUs", aboutus);
router.use("/indianT20League", indianT20League);
router.use("/download", download);
router.use("/privacy_policy", privacy_policy);
router.use("/faqs", faqs);
router.use("/t&C", TermsAndCondition);
router.use('/how-to-play',HowToPlay);
router.use('/fantasy-cricket',FantasyCricket)
router.use('/press-release',PressRelease);
router.use("/footer",FooterDisclaimer);
router.use('/cricketpoints',CricketPoints)

module.exports = router;
