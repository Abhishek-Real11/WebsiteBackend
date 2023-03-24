const path = require("path");
const aws = require("aws-sdk");

require("dotenv").config();

aws.config.update({
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  region: "ap-south-1",
});

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       const directory="/Users/real11fullstack/Desktop/WebsiteBackend/uploads"
//        cb(null, directory);
//     },
//     filename: function (req, file, cb) {
//        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     }
//  });

// const upload = multer({
//    fileFilter,
//    storage: multerS3({
//      acl: "public-read",
//      s3,
//      bucket: process.env.AWS_S3_BUCKET,
//      metadata: function (req, file, cb) {
//        cb(null, { fieldName: "TESTING_METADATA" });
//      },
//      key: function (req, file, cb) {
//        cb(null, Date.now().toString());
//      },
//    }),
//  });
// let s3 = new S3Client()
//  const upload = multer({
//    storage: multerS3({
//      s3: s3,
//      bucket: process.env.AWS_S3_BUCKET,
//      metadata: function (req, file, cb) {
//        cb(null, {fieldName: file.fieldname});
//      },
//      key: function (req, file, cb) {
//        cb(null, Date.now().toString())
//      }
//    })
//  })
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
      cb(null, "image/jpeg");
    },
  }),
});

module.exports = upload;
