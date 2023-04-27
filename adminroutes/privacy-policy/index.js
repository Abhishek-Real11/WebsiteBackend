const express = require("express");
const router = express.Router();
const {
  create,
  getContent,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
  getContentBySubType,
} = require("../../adminControllers/contentController");
const verify = require("../../middlewares/verify");

router.post("/createContent", create);
router.get("/getContent", verify, getContent);
router.post("/updateContentStatus", updateStatus);
router.delete("/deleteContent", deleteContent);
router.get("/content/:slug", getSlug);
router.post("/editContent", editContent);
router.get("/getContentBySubType", verify, getContentBySubType);

module.exports = router;
