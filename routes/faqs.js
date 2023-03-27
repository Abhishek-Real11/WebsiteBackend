const express = require("express");
const router = express.Router();
const {
    addfaqs,
    getfaqs
} = require("../controllers/faqsController");
 const verify=require("../midllewares/verify")

// router.use('/',(req,rex,next)=>{
//     console.log("Hit");
//     next();
// })
router.post("/addfaqs", addfaqs);
router.get('/getfaqs',getfaqs);


module.exports = router;
    