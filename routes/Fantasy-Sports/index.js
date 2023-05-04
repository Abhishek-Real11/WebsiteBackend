const express = require("express");
const router = express.Router();
const {
  getFanatasyCricket,

  getSlug,
} = require("../../controllers/fantasyCricketController");

router.get("/getFanatasyCricket", getFanatasyCricket);
router.get("/getSlug", getSlug);

module.exports = router;
