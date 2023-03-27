const express = require("express");
const router = express.Router();
const {
 uploadfile,
 getFile,
 updateStatus,
 deleteFile
} = require("../controllers/fileUploadController");
 const verify=require("../midllewares/verify")

 const upload1=require("../config/multer")

// router.use('/',(req,rex,next)=>{
//     console.log("Hit");
//     next();
// })
router.post("/addbanner",[upload1.single('image')], uploadfile);
router.get('/getbanner',getFile);
router.post('/updateStatus',updateStatus);
router.delete('/deleteImage',deleteFile)


module.exports = router;
    