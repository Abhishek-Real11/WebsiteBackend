const express = require("express");
const router = express.Router();
const { createSubAdmin,getSubAdmin } = require("../../adminControllers/subAdminController");
const verify = require("../../middlewares/verify");

router.post("/create", verify, createSubAdmin);
router.get("/getSubAmdin", verify, getSubAdmin);
// router.post("/login", login);
// router.post("/getotp", getOtp);
// router.post("/resetpassword", resetPassword);

module.exports = router;
