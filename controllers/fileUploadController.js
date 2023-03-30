const image = require("../models/imageModel");
require("dotenv").config();
const uploadfile = async (req, res) => {
  try {
    const file = req.file;
    const type = req.query.type;
    if (!req.file)
      return res.status(400).send({
        success: false,
        data: "",
        message: "Please Select Image ",
      });

    if (!type)
      return res.status(400).send({ message: "Please send Type of Image." });

    const status = req.query.status;
    const isActive = req.query.isActive;

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
    console.log;
    const type = req.query.type || "all";

    if (type !== "all") {
      data = await image.findAll({ where: { isActive: "1", type: type } });
    } else {
      data = await image.findAll({ where: { isActive: "1" } });
    }

    if (data)
      return res.status(200).send({
        success: true,
        data: data,
        message: "Get Succesfully",
      });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};
const updateStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await image.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await image.update(
        { isActive: isActive },
        { where: { id: id } }
      );

      return res.status(200).send({
        success: true,
        data: isActive,
        message: "Status Update Succesfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        data: "",
        message: "Please Change Status",
      });
    }
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
    let data = await image.update(
      { isDeleted: true },
      { where: { id: req.query.id } }
    );

    return res.status(200).send({
      success: true,
      data: data,
      message: "Deleted Succesfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Deletion Failed",
    });
  }
};

module.exports = {
  uploadfile,
  getFile,
  updateStatus,
  deleteFile,
};
