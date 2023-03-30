const IndianT20League = require("../models/indianT20League");
require("dotenv").config();
const addIndainT20League = async (req, res) => {
  try {
    const record = JSON.parse(req.body.data);
    let data = await IndianT20League.create({
      captain: record.captain,
      team: record.team,
      coach: record.coach,
      titles: record.titles,
      majorSignings: record.majorSignings,
      teamlogo: req.file.location,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Success",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

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
  addIndainT20League,
  getIndainT20League,
};
