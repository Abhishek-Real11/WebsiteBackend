const express = require("express");
const router = express.Router();
const {
  addIndainT20League,
  getIndainT20League,
} = require("../controllers/indain-T20-LeagueController");

const upload1 = require("../config/multer");

router.post(
  "/addIndainT20League",
  [upload1.single("image")],
  addIndainT20League
);
router.get("/getIndainT20League", getIndainT20League);

module.exports = router;
