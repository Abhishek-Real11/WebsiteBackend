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
    let src = req.file.location;
    let data = await image.create({
      image: src,
      type: type,
      status: status,
      isActive: isActive,
    });
    if (data)
      return res.status(200).send({
        success: true,
        data: src,
        message: "File is Uploaded Succesfully",
      });
    else return res.send({ message: "File is not Uploaded Successfully" });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getFile = async (req, res) => {
  try {
    let data = await image.findAll({ where: { status: "activate" } });
    if (data)
      return res.status(200).send({
        success: true,
        data: data,
        message: "Get Succesfully",
      });
  } catch {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};
const updateStatus = async (req, res) => {
  try {
    let value = req.body.status;

    let data = await image.update(
      { status: value },
      { where: { id: req.body.id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Update Succesfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const deleteFile = async (req, res) => {
  try {
    let data = await image.destroy({ where: { id: req.query.id } });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Deldted Succesfully",
    });
  } catch (error) {}
};

module.exports = {
  uploadfile,
  getFile,
  updateStatus,
  deleteFile,
};
