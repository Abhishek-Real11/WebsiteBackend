const express = require("express");
const router = express.Router();
const {
    addFooter,
    getFooter,
    editFooter
} = require("../adminControllers/footerController");
const verify = require("../middlewares/verify");
const upload1 = require("../config/multer");

router.post("/addFooter",[upload1.single("image")], addFooter);
router.get("/getFooter",verify, getFooter);
router.post('/editFooter',verify,editFooter);


module.exports = router;
