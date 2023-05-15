const express = require("express");
const router = express.Router();

const verify = require("../../middlewares/verify");


const {
   createStickyButton,
   getStickyButton,
   updateStikcyButton,
   deleteStickyButton
} = require("../../adminControllers/stickyButtonController");



const upload1 = require("../../config/multer");


router.post("/createStickyButton",verify,[upload1.single("image")],createStickyButton);
router.get("/getStickyButton", verify, getStickyButton);
router.post("/updateStikcyButton",verify, updateStikcyButton);
router.delete("/deleteStickyButton",verify, deleteStickyButton);



module.exports = router;
