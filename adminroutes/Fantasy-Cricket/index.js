const express = require("express");
const router = express.Router();
const {
  createFanatasyCricket,
  getFanatasyCricket,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
  getFanatasyCricketLeague
} = require("../../adminControllers/fantasyCricketController");

const upload1 = require("../../config/multer");
const verify = require("../../middlewares/verify");

router.post(
  "/createFanatasyCricket",
  verify,
  [upload1.single("image")],
  createFanatasyCricket
);
router.get("/getFanatasyCricket", verify, getFanatasyCricket);
router.get("/getFanatasyCricketLeague", verify, getFanatasyCricketLeague);
router.post("/updateStatus", verify, updateStatus);
router.delete("/deleteContent", verify, deleteContent);
router.get("/getSlug", verify, getSlug);
router.post("/editContent", verify, [upload1.single("image")], editContent);

module.exports = router;
