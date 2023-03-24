const express = require("express");
const userRoute = require("./userRoutes");
const fileupload=require("./fileUpload");
const router = express.Router();

router.use("/auth", userRoute);
router.use("/addbanner",fileupload);

module.exports = router;
