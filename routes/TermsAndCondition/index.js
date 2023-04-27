const express = require("express");
const router = express.Router();
const {
  createTermsAndCondition,
  getTermsAndCondition,
  updateTermsAndCondition,
  deleteTermsAndCondition,
  editTermsAndCondition
} = require("../../controllers/TermsAndConditionController");
const verify = require("../../middlewares/verify");


router.get("/getTermsAndCondition", getTermsAndCondition);

module.exports = router;
