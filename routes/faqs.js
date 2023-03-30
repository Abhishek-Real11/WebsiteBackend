const express = require("express");
const router = express.Router();
const { getfaqs } = require("../controllers/faqsController");

router.get("/getfaqs", getfaqs);

module.exports = router;
