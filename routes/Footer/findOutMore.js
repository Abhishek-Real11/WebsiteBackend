const express = require("express");
const router = express.Router();

const {
    
  getFindOutMore,
  
} = require("../../controllers/findOutMoreController");







router.get("/getFindOutMore", getFindOutMore);


module.exports = router;
