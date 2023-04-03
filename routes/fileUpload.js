const express = require("express");
const router = express.Router();
const {
  getFile,

  deleteFile,
} = require("../controllers/fileUploadController");

router.get("/getbanner", getFile);

module.exports = router;
