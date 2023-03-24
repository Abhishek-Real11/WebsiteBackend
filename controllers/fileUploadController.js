const image = require("../models/imageModel");
require("dotenv").config();
const uploadfile = async (req, res) => {
  try {
    const file = req.file;

    // const src=req.body.image
    console.log(req.file);
    // const { type, status, isActive } = req.query;
    const type = req.query.type;

    if (!type)
      return res.status(400).send({ message: "Please send Type of Image." });

    const status = req.query.status;
    const isActive = req.query.isActive;
    // if (!file) {
    //   return res.status(400).send({ message: "Please upload a file." });
    // }
    let src = req.file.location
    let data = await image.create({
      image: src,
      type: type,
      status: status,
      isActive: isActive,
    });
    if (data) return res.send({ message: "File is successfully.", src });
    else return res.send({ message: "File is not Uploaded Succesfully" });
  } catch (error) {
    console.log(error);
  }
};

const getFile = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  uploadfile,
  getFile,
};
