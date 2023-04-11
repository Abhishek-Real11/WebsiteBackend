const express = require("express");

const fileupload = require("./fileUpload");
const faqs = require("./faqs");
const indian_T20_League = require("./indian-T20-League");
const testimonial = require("./testimonial");
const content = require("./content");
const footer=require("./Footer")
const router = express.Router();

router.use("/", fileupload);
router.use("/", faqs);
router.use("/", indian_T20_League);
router.use("/", testimonial);
router.use("/", content);
router.use('/',footer);

module.exports = router;
