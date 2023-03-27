const express = require("express");
const userRoute = require("./userRoutes");
const fileupload=require("./fileUpload");
const faqs=require('./faqs')
const indian_T20_League=require('./indian-T20-League')
const router = express.Router();

router.use("/auth", userRoute);
router.use("/",fileupload);
router.use('/',faqs);
router.use('/',indian_T20_League)


module.exports = router;
