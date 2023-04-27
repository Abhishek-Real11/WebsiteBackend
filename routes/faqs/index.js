const express = require("express");
const router = express.Router();

const { getfaqs } = require("../../controllers/FaqPageControlller");

router.get("/getfaqs", getfaqs);

module.exports = router;
