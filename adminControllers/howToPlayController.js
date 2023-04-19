const howToPlayModel = require("../models/howToPlayModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");
const createHowToPlay = async (req, res) => {
  try {
    let data;
    if (req.query.subType == "steps") {
       const { order, description,title } = JSON.parse(req.body.data);
      data = await howToPlayModel.create({
        order: order,
        title:title,
        description: description,
        type: req.query.type,
        subType: req.query.subType,
   
      });
    } else {
      const { order, description,title } = JSON.parse(req.body.data);
      data = await howToPlayModel.create({
        order: order,
        description: description,
        image: req.file.location,
        type: req.query.type,
        title:title,
        subType: req.query.subType,
      });
    }

    return res.status(200).send({
      success: true,
      data: data,
      message: "Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getHowToPlay = async (req, res) => {
  try {
    let data;
    data = await howToPlayModel.findAll({
      where: {
        isDeleted: 0,
        subType: req.query.subType,
      },
      order: [["order", "Asc"]],
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

const updateHowToPlayStatus = async (req, res) => {
  try {
    
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await howToPlayModel.findAll({ where: { id: id } });
   
    if (isActive !== result[0].dataValues.isActive) {
      let data = await howToPlayModel.update(
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
  createHowToPlay,
  getHowToPlay,
  updateHowToPlayStatus,
};

