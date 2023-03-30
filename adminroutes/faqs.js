const express = require("express");
const router = express.Router();
const {
    addfaqs,
    getfaqs,
    updateStatus
} = require("../adminControllers/faqsController");
 const verify=require("../middlewares/verify")

// router.use('/',(req,rex,next)=>{
//     console.log("Hit");
//     next();
// })
router.post("/addfaqs", addfaqs);
router.get('/getfaqs',verify,getfaqs);
router.post('/updateFaqStatus',updateStatus)


module.exports = router;
    