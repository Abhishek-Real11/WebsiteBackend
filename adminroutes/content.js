const express = require("express");
const router = express.Router();
const {
    create,
    getContent,
    updateStatus,deleteFile
} = require("../adminControllers/contentController");
 const verify=require("../middlewares/verify")


router.post("/createContent", create);
router.get('/getContent',verify,getContent);
router.post('/updateContentStatus',updateStatus)
router.delete('/deleteFile',deleteFile)

module.exports = router;
    