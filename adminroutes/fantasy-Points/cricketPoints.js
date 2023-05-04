const express = require("express");
const router = express.Router();

const verify = require("../../middlewares/verify");

const {
  createFantasyCricketPoints,
  getFantasyCricketPoints,
  editFantasyCricketPoints,
} = require("../../adminControllers/fantasyCrikcetPointsController");

const upload1 = require("../../config/multer");

router.post("/createFantasyCricketPoints", verify, createFantasyCricketPoints);
router.get("/getFantasyCricketPoints", verify, getFantasyCricketPoints);
router.post("/editFantasyCricketPoints", verify, editFantasyCricketPoints);
// router.delete("/deleteFooterDisclaimer",verify, deleteFooterDisclaimer);
// router.post("/editFooterDisclaimer",verify, editFooterDisclaimer);

module.exports = router;
