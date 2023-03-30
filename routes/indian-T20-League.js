const express = require("express");
const router = express.Router();
const {
  getIndainT20League,
} = require("../controllers/indain-T20-LeagueController");

const upload1 = require("../config/multer");

router.get("/getIndainT20League", getIndainT20League);

module.exports = router;
