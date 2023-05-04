const express = require("express");
const router = express.Router();
const {
  createHowToPlay,
  getHowToPlay,
  updateHowToPlayStatus,
} = require("../../adminControllers/howToPlayController");
const {
  create,
  getContent,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
} = require("../../adminControllers/howToPlayContentController");

const {
  createTable,
  getTable,
  updateTableStatus,
  deleteTable,
} = require("../../adminControllers/howToPlayTableController");

const {
  createSteps,
  getSteps,
  updateStepsStatus,
  deleteSteps
} = require("../../adminControllers/howToPlayStepsController");


const {
  createTrophy,
  getTrophy
} = require("../../adminControllers/trophyController");

const upload1 = require("../../config/multer");
const verify = require("../../middlewares/verify");

router.post(
  "/createHowToPlayCarousel",
  verify,
  [upload1.single("image")],
  createHowToPlay
);
router.get("/getHowToPlayCarousel", verify, getHowToPlay);
router.post("/updateHowToPlayCaruselStatus", updateHowToPlayStatus);

router.post("/createContent", verify, create);
router.get("/getContent", verify, getContent);
router.post("/updateContentStatus", verify, updateStatus);
router.delete("/deleteContent", verify, deleteContent);
router.get("/content/:slug", getSlug);
router.post("/editContent", verify,editContent);

router.post("/createTable", verify, createTable);
router.get("/getTable", verify, getTable);
router.post("/updateTableStatus", verify, updateTableStatus);
router.delete("/deleteTable", verify, deleteTable);

router.post("/createSteps", verify,[upload1.array("image",2)], createSteps);
router.get("/getSteps", verify, getSteps);
router.post("/updateStepsStatus", verify, updateStepsStatus);
router.delete("/deleteSteps", verify, deleteSteps);

router.post("/createTrophy", verify,[upload1.array("image",2)], createTrophy);
router.get("/getTrophy", verify, getTrophy);

module.exports = router;
