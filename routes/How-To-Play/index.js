const express = require("express");
const router = express.Router();
const {
  getHowToPlay,
  getContent,
  getTrophy
} = require("../../controllers/howToPlayController");

router.get("/getHowToPlayCarousel", getHowToPlay);
router.get("/getMiddleSection", getContent);
router.get("/getTrophy", getTrophy);


module.exports = router;
