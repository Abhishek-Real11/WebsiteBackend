const express = require("express");
const router = express.Router();
const { getFooter } = require("../controllers/footerController");
const verify = require("../middlewares/verify");
const upload1 = require("../config/multer");

router.get("/getFooter", getFooter);

module.exports = router;
