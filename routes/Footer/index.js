const express = require("express");
const router = express.Router();

const FooterDisclaimer = require("./footerDisclaimer");
const FindOutMore = require("./findOutMore");
const AboutUs = require("./aboutUsFooter");
const FooterLinksAndAddress = require("./footerLinksAndAddress");
const StickyButton=require('./stickyButton')

router.use("/", FooterDisclaimer);
router.use("/findOutMore", FindOutMore);
router.use("/about-us", AboutUs);
router.use("/address_and_links", FooterLinksAndAddress);
router.use("/sticky-button", StickyButton);

module.exports = router;
