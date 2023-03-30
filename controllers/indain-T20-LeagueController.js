const IndianT20League = require("../models/indianT20League");
require("dotenv").config();

const getIndainT20League = async (req, res) => {
  try {
    let data;
    data = await IndianT20League.findAll({});
    return res.status(200).send({
      success: false,
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
  getIndainT20League,
};
