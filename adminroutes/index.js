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

module.exports = router;
