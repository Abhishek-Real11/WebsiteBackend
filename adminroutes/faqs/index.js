const express = require("express");
const router = express.Router();

const {
  addfaqs,
  getfaqs,
  updateFaqsStatus,
  deleteFaqs,
} = require("../../adminControllers/FaqPageControlller");
const verify = require("../../middlewares/verify");

router.post("/addfaqs", addfaqs);
router.get("/getfaqs", verify, getfaqs);
router.post("/updateFaqStatus", updateFaqsStatus);
router.delete("/deleteFaqs", deleteFaqs);

module.exports = router;
