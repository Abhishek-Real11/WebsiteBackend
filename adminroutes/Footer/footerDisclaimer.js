const express = require("express");
const router = express.Router();

const verify = require("../../middlewares/verify");


const {
    createFooterDisclaimer,
    getFooterDisclaimer,
    updateFooterDisclaimer,
    editFooterDisclaimer,
    deleteFooterDisclaimer
} = require("../../adminControllers/footerDisclaimerController");



const upload1 = require("../../config/multer");


router.post("/createFooterDisclaimer", verify,createFooterDisclaimer);
router.get("/getFooterDisclaimer", verify, getFooterDisclaimer);
router.post("/updateContentStatus",verify, updateFooterDisclaimer);
router.delete("/deleteFooterDisclaimer",verify, deleteFooterDisclaimer);
router.post("/editFooterDisclaimer",verify, editFooterDisclaimer);



module.exports = router;
