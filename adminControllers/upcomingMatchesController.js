const UpcomingMatches = require("../models/upcomingMatchesModel");

const createUpcomingMatches = async (req, res) => {
  try {
    
    let data = await UpcomingMatches.create({
     type:"Upcoming Matches"
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: " Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getUpcomingMatches = async (req, res) => {
  try {
    let data;
    
    UpcomingMatches.findAll({ where: { isDeleted: 0 } })
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

const updateUpcomingMatches = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;
    
    let result = await UpcomingMatches.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await UpcomingMatches.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: false,
        data: data,
        message: "Status Change Successfully",
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
  createUpcomingMatches,
  getUpcomingMatches,
  updateUpcomingMatches,
};
