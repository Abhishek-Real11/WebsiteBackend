const express = require("express");
const router = express.Router();
const {
    addfaqs,
    getfaqs,
    updateStatus
} = require("../controllers/faqsController");
 const verify=require("../midllewares/verify")

// router.use('/',(req,rex,next)=>{
//     console.log("Hit");
//     next();
// })
router.post("/addfaqs", addfaqs);
router.get('/getfaqs',getfaqs);
router.post('/updateFaqStatus',updateStatus)


module.exports = router;
    