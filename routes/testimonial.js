const express = require("express");
const router = express.Router();
const {
  addTestimonial,
  getTestimonial,
} = require("../controllers/testimonialController");
const verify = require("../midllewares/verify");

const upload1 = require("../config/multer");

// router.use('/',(req,rex,next)=>{
//     console.log("Hit");
//     next();
// })
router.post("/addTestimonial", [upload1.single("image")], addTestimonial);
router.get("/getTestimonial", getTestimonial);

module.exports = router;
