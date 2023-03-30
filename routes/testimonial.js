const express = require("express");
const router = express.Router();
const { getTestimonial } = require("../controllers/testimonialController");

const upload1 = require("../config/multer");

router.get("/getTestimonial", getTestimonial);

module.exports = router;
