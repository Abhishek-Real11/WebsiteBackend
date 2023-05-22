const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getOtp,
  resetPassword,
} = require("../adminControllers/userController");


router.post("/signup", signup);
router.post("/login", login);
router.post("/getotp", getOtp);
router.post("/resetpassword", resetPassword);


module.exports = router;
