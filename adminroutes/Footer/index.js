const express = require("express");
const router = express.Router();



const FooterDisclaimer=require("./footerDisclaimer")


router.use('/',FooterDisclaimer);


module.exports = router;
