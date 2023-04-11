const express = require("express");
const router = express.Router();
const {
  addTestimonial,
  getTestimonial,
  updateStatus,
  deleteTestimonial,
} = require("../adminControllers/testimonialController");
const verify = require("../middlewares/verify");

const upload1 = require("../config/multer");

router.post("/addTestimonial", [upload1.single("image")], addTestimonial);
router.get("/getTestimonial", verify, getTestimonial);
router.post("/updateTestimonialStatus", updateStatus);
router.delete("/deleteTestimonial", deleteTestimonial);

module.exports = router;
