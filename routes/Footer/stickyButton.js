const express = require("express");
const router = express.Router();

const { getStickyButton } = require("../../controllers/stickyButtonController");

router.get("/getStickyButton", getStickyButton);

module.exports = router;
