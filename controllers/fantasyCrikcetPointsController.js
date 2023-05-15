const FantasyCricketPoints = require("../models/fantasyCricketPointsModel");
const { getPagination, getPagingData } = require("../config/paginate");

const getFantasyCricketPoints = async (req, res) => {
  try {
    let data;
    if (req.query.type) {
      FantasyCricketPoints.findAll({
        where: {
          isDeleted: 0,
          type: req.query.type,
        },
      })
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
  getFantasyCricketPoints,
};
