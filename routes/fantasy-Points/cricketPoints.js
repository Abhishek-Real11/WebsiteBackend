const express = require("express");
const router = express.Router();

const {
  getFantasyCricketPoints,
} = require("../../controllers/fantasyCrikcetPointsController");

router.get("/getFantasyCricketPoints", getFantasyCricketPoints);

module.exports = router;
