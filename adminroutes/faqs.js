const express = require("express");
const router = express.Router();
const {
  addfaqs,
  getfaqs,
  updateStatus,
  deleteFaqs
} = require("../adminControllers/faqsController");
const verify = require("../middlewares/verify");

router.post("/addfaqs", addfaqs);
router.get("/getfaqs", verify, getfaqs);
router.post("/updateFaqStatus", updateStatus);
router.delete('/deleteFaqs',deleteFaqs)

module.exports = router;
