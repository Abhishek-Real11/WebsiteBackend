const express = require("express");
const router = express.Router();
const {
 uploadfile,
} = require("../controllers/fileUploadController");
 const verify=require("../midllewares/verify")

 const upload1=require("../config/multer")

router.use('/',(req,rex,next)=>{
    console.log("Hit");
    next();
})
router.post("/",[upload1.single('image')], uploadfile);


module.exports = router;
    