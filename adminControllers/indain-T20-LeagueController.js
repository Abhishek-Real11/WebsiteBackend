const IndianT20League = require("../models/indianT20League");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");
const addIndianT20League = async (req, res) => {
  try {
    const record = JSON.parse(req.body.data);
    console.log(req.files[0].location,req.files[1].location)
    let data = await IndianT20League.create({
      captain: record.captain_name,
      team: record.team_name,
      coach: record.coach_name,
      titles: record.winning_titles,
      majorSignings: record.new_players,
      playerlogo: req.files[0].location,
      teamlogo: req.files[1].location,
      year: req.query.year || null,
      color1: record.color_1,
      color2: record.color_2,
      color3: record.color_3,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Team Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getIndianT20League = async (req, res) => {
  try {
    // let data;
    // data = await IndianT20League.findAll({});
    // return res.status(200).send({
    //   success: false,
    //   data: data,
    //   message: "Get SuccessFully",
    // });

    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    IndianT20League.findAndCountAll({ where: { isDeleted: 0 }, limit, offset })
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

const updateIndianT20LeagueStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await IndianT20League.findAll({ where: { id: id } });

    if (isActive !== result[0].dataValues.isActive) {
      let data = await IndianT20League.update(
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

const deleteIndianT20League = async (req, res) => {
  try {
    let id = req.query.id;
   
    let result = await IndianT20League.findAll({ where: { id: id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await IndianT20League.update(
        { isDeleted:1},
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

const editIndianT20League = async (req, res) => {
  try {
    const record = JSON.parse(req.body.data);
    // let playerImage = req.files[0].location;
    // let teamImage = req.files[1].location;
    console.log("->", req.files);
    // console.log("aaa",req.files)
    let result=await IndianT20League.findOne({where: { id: req.query.id } },{
      attributes: ["playerlogo","teamlogo"],
    })
    console.log(result.dataValues.playerlogo,result.dataValues)
    let data = await IndianT20League.update(
      {
        captain: record.captain_name,
        team: record.team_name,
        coach: record.coach_name,
        titles: record.winning_titles,
        majorSignings: record.new_players,
        playerlogo: req.files.length === 0?result.dataValues.playerlogo:req.files[0].location,
        teamlogo: req.files.length === 0?result.dataValues.teamlogo:req.files[1].location,
        year: req.query.year || null,
        color1: record.color_1,
        color2: record.color_2,
        color3: record.color_3,
      }, 
      { where: { id: req.query.id } }
    );
    console.log(data.length)
    console.log("123")
    res.status(200).json({success:true,data,message:"Success"})
  } catch (error) {
    console.log(">>>", error);
    return res.status(400).send({
      success: false,
      data: "",
      message: "error",
    });
  }
};

module.exports = {
  addIndianT20League,
  getIndianT20League,
  updateIndianT20LeagueStatus,
  editIndianT20League,
  deleteIndianT20League
};
