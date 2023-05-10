const express = require("express");
const router = express.Router();

const { getAboutUs } = require("../../controllers/aboutUsController");

router.get("/getAboutUs", getAboutUs);

module.exports = router;
