const express = require("express");
const router = express.Router();
const {
    addIndainT20League,
    getIndainT20League
} = require("../controllers/indain-T20-LeagueController");
 const verify=require("../midllewares/verify")

 const upload1=require("../config/multer")

// router.use('/',(req,rex,next)=>{ 
//     console.log("Hit");
//     next();
// })
router.post("/addIndainT20League",[upload1.single('image')], addIndainT20League);
router.get('/getIndainT20League',getIndainT20League);


module.exports = router;
    