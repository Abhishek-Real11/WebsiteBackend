const express = require("express");
const router = express.Router();

const verify = require("../../middlewares/verify");


const {
    createFindOutMore,
  getFindOutMore,
  updateFindOutMoreStatus,
  deleteFindOutMore
} = require("../../adminControllers/findOutMoreController");



const upload1 = require("../../config/multer");


router.post("/createFindOutMore", verify,createFindOutMore);
router.get("/getFindOutMore", verify, getFindOutMore);
router.post("/updateFindOutMoreStatus",verify, updateFindOutMoreStatus);
router.delete("/deleteFindOutMore",verify, deleteFindOutMore);


module.exports = router;
