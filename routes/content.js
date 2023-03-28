const express = require("express");
const router = express.Router();
const {
    create,
    getContent
} = require("../controllers/contentController");
 const verify=require("../midllewares/verify")


router.post("/createContent", create);
router.get('/getContent',getContent);


module.exports = router;
    