const express = require("express");
const router = express.Router();
const {
  createTermsAndCondition,
  getTermsAndCondition,
  updateTermsAndCondition,
  deleteTermsAndCondition,
  editTermsAndCondition,
} = require("../../adminControllers/TermsAndConditionController");
const verify = require("../../middlewares/verify");

router.post("/createTermsAndCondition", verify, createTermsAndCondition);
router.get("/getTermsAndCondition", verify, getTermsAndCondition);
router.post("/updateTermsAndCondition", verify, updateTermsAndCondition);
router.delete("/deleteTermsAndCondition", verify, deleteTermsAndCondition);
router.post("/editTermsAndCondition", verify, editTermsAndCondition);

module.exports = router;
