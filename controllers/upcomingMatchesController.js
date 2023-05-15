const UpcomingMatches = require("../models/upcomingMatchesModel");


const getUpcomingMatches = async (req, res) => {
  try {
    let data;
    
    UpcomingMatches.findAll({ where: { isDeleted: 0 } })
      .then((data) => {

        return res.status(200).send({
          success: true,
          data: data[0],
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
  
  getUpcomingMatches,
 
};
