const howToPlayModel = require("../models/howToPlayModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");
   
const getHowToPlay = async (req, res) => {
  try {
    let data;
    data = await howToPlayModel.findAll({
      where: {
        isDeleted: 0,
        isActive:1,
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

module.exports = {
  getHowToPlay,
};
