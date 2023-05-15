const image = require("../models/imageModel");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");
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


    let src = req.file.location;
    let data = await image.create({
      image: src,
      type: type,
      subType:req.query.subType||null
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
    // let data = await image.findAll({});
    const { page, size,type } = req.query;
    const { limit, offset } = getPagination(page, size);

    image
      .findAndCountAll({ where: { isDeleted: 0,type:type }, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        
        return res.status(200).send({
          success: true,
          data: response,
          message: "Get Succesfully",
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: true,
          message:
            err.message || "Some error occurred while retrieving Banner's.",
        });
      });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};
const updateFileStatus = async (req, res) => {
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
    let result = await image.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await image.update(
        { isDeleted: true },
        { where: { id: req.query.id } }
      );
      return res.status(202).send({
        success: true,
        data: data,
        message: "Deleted Succesfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        data: "",
        message: "Alreday Deleted",
      });
    }
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
  updateFileStatus,
  deleteFile,
};
