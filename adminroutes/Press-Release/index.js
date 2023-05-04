const express = require("express");
const router = express.Router();
const {
    createPressRelease,
    getPressRelease,
    updateStatus,
    deletePress
} = require("../../adminControllers/pressReleaseController");
const verify = require("../../middlewares/verify");
const upload1 = require("../../config/multer");

router.post("/addPressRelease", verify,[upload1.single("image")], createPressRelease);
router.get("/getPressRelease", verify, getPressRelease);
router.post("/updateStatus", verify, updateStatus);
router.delete("/deletePress", verify, deletePress);
// router.post("/editTermsAndCondition", verify, editTermsAndCondition);

module.exports = router;
