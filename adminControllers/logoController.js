const Logo = require("../models/logoModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");
const uploadLogo = async (req, res) => {
  try {
    const { url } = JSON.parse(req.body.data);

    let data = await Logo.create({
      logo: req.file.location,
      url: url,
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Logo Added Successfully",
    });
    console.log("1");
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Image with this Name Already Present",
    });
  }
};

const getLogo = async (req, res) => {
  try {
    let data;
    data = await Logo.findAll({
      where: {
        isDeleted: 0,
      },
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Get SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const deleteLogo = async (req, res) => {
  try {
    let result = await Logo.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await Logo.update(
        { isDeleted: true },
        { where: { id: req.query.id } }
      );
      return res.status(202).send({
        success: true,
        data: data,
        message: "Deleted Succesfully",
      });
    } else {
      return res.status(404).send({
        success: false,
        data: "",
        message: "Data Not Found",
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

const updateLogoStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await Logo.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await Logo.update(
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

module.exports = {
  uploadLogo,
  getLogo,
  deleteLogo,
  updateLogoStatus,
};
