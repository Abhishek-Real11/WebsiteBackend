const express = require("express");
const router = express.Router();
const { getTestimonial } = require("../controllers/testimonialController");

router.get("/getTestimonial", getTestimonial);

module.exports = router;
