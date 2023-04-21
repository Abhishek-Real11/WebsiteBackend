const express = require("express");
const userRoute = require("./userRoutes");
const fileupload = require("./fileUpload");
// const faqs = require("./faqs");
// const indian_T20_League = require("./indian-T20-League");
// const testimonial = require("./testimonial");
// const content = require("./content");
const footer=require('./Footer');
const router = express.Router();

const home=require('./home/index')
const aboutus=require('./about/index')
const indianT20League=require('./indianT20League/index')
 

router.use("/auth", userRoute);
router.use("/", fileupload);
// router.use("/", faqs);
// router.use("/", indian_T20_League);
// router.use("/", testimonial);
// router.use("/", content);
router.use('/',footer);
// router.use('/',logo);
// router.use('/',squareBox);

router.use('/home',home);
router.use('/aboutUs',aboutus);
router.use('/indianT20League',indianT20League)

// admin/indianT20League/createContent


module.exports = router;
