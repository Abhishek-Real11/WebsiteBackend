const express = require("express");
const router = express.Router();
const {
  getFile,

  deleteFile,
} = require("../controllers/fileUploadController");

const upload1 = require("../config/multer");

router.get("/getbanner", getFile);

router.post("/deleteImage", deleteFile);

module.exports = router;
