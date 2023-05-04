const express = require("express");
const router = express.Router();
const {
    createPressRelease,
    getPressRelease,
    updateStatus,
    deletePress
} = require("../../Controllers/pressReleaseController");


router.get("/getPressRelease", getPressRelease);


module.exports = router;
