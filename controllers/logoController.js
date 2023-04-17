const Logo = require("../models/logoModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");

const getLogo = async (req, res) => {
  try {
    let data;
    data = await Logo.findAll({
      where: {
        isDeleted: 0,
        isActive: 1,
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

module.exports = {
  getLogo,
};
