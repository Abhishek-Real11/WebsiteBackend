const express = require('express');
const userRoute=require("./userRoutes")
const router = express.Router();

router.use('/auth',userRoute)


module.exports = router;