const express = require("express");
const router = express.Router();

const FooterDisclaimer = require("./footerDisclaimer");
const FindOutMore=require('./findOutMore')
const AboutUs=require('./aboutUsFooter')

router.use("/", FooterDisclaimer);
router.use("/findOutMore", FindOutMore);
router.use("/about-us", AboutUs);

module.exports = router;

