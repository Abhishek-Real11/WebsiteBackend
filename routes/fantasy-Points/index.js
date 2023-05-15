const express = require("express");
const router = express.Router();



const CricketPoints=require("./cricketPoints")


router.use('/',CricketPoints);


module.exports = router;
