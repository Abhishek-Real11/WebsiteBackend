const express = require("express");
const router = express.Router();

const verify = require("../../middlewares/verify");


const {
    createAboutUs,
    getAboutUs,
    updateAboutUs,
    deleteAboutUs
} = require("../../adminControllers/aboutUsController");



const upload1 = require("../../config/multer");


router.post("/createAboutUs", verify,createAboutUs);
router.get("/getAboutUs", verify, getAboutUs);
router.post("/updateAboutUs",verify, updateAboutUs);
router.delete("/deleteAboutUs",verify, deleteAboutUs);


module.exports = router;
