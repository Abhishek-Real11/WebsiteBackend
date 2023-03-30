const express = require("express");
const router = express.Router();
const {
  addfaqs,
  getfaqs,
  updateStatus,
} = require("../controllers/faqsController");

router.post("/addfaqs", addfaqs);
router.get("/getfaqs", getfaqs);
router.post("/updateFaqStatus", updateStatus);

module.exports = router;
