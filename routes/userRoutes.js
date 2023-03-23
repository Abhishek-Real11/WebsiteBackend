const express = require('express');
const router = express.Router();
 const {signup,login,getOtp,resetPassword}=require('../controllers/userController')
// const verify=require("../middlewares/verify")

router.post('/signup',signup);
router.post('/login',login);
router.post('/getotp',getOtp);
router.post('/resetpassword',resetPassword);


module.exports = router;