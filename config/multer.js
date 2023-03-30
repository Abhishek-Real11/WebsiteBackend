const path = require("path");
const aws = require("aws-sdk");

require("dotenv").config();

aws.config.update({
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  region: "ap-south-1",
});

const { S3Client } = require("@aws-sdk/client-s3");
const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");

const app = express();

var s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    metadata: function (req, file, cb) {
      console.log(file);
      cb(null, { fieldName: file.originalname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
    contentType: function (req, file, cb) {
      cb(null, file.mimetype);
    },
  }),
});

module.exports = upload;
