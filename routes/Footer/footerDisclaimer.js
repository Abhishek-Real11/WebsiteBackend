const express = require("express");
const router = express.Router();



const { 
    getFooterDisclaimer,
} = require("../../controllers/footerDisclaimerController");







router.get("/getFooterDisclaimer",  getFooterDisclaimer);


module.exports = router;
