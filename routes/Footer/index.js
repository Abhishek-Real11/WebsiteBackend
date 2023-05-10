const express = require("express");
const router = express.Router();

const FooterDisclaimer = require("./footerDisclaimer");
const FindOutMore = require("./findOutMore");
const AboutUs = require("./aboutUsFooter");
const FooterLinksAndAddress = require("./footerLinksAndAddress");

router.use("/", FooterDisclaimer);
router.use("/findOutMore", FindOutMore);
router.use("/about-us", AboutUs);
router.use("/address_and_links", FooterLinksAndAddress);

module.exports = router;
