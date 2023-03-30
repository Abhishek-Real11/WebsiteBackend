const express = require("express");
const router = express.Router();
const {
  create,
  getContent,
  updateStatus,
} = require("../controllers/contentController");

router.post("/createContent", create);
router.get("/getContent", getContent);
router.post("/updateContentStatus", updateStatus);

module.exports = router;
