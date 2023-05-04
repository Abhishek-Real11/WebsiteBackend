const howToPlayModel = require("../models/howToPlayModel");
const HTPSteps = require("../models/htPStepsModel");
const HTPContentModel = require("../models/howToPlayContentModel");
const HTPTableModel = require("../models/HowToPlayTableModel");
const Trophy = require("../models/trophyModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");

const getHowToPlay = async (req, res) => {
  try {
    let data;
    data = await howToPlayModel.findAll({
      where: {
        isDeleted: 0,
        isActive: 1,
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

const getContent = async (req, res) => {
  try {
    let data = await HTPSteps.findAll({
      where: { isDeleted: 0,isActive:1 },
      order: [["createdAt", "Asc"]],
    });
   
    
    let data1 = await HTPContentModel.findAll({
      where: {
        isDeleted: 0,
        isActive: 1,
        // subType: req.query.subType,
      },
      order: [["createdAt", "Asc"]],
    });
    let data3 = await HTPTableModel.findAll({
      where: {
        isDeleted: 0,
        isActive: 1,
        // subType: req.query.subType,
      },
      order: [["createdAt", "Asc"]],
    });
    return res.status(200).send({
      success: true,
      steps: data,
      Content: data1,
      Table: data3,
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




const getTrophy = async (req, res) => {
  try {
    let data;
    Trophy.findAll({ where: { isDeleted: 0,isActive:1 } })
      .then((data) => {
        return res.status(200).send({
          success: true,
          data: data,
          message: "Get Succesfully",
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while retrieving Content.",
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



module.exports = {
  getHowToPlay,
  getContent,
  getTrophy

};
