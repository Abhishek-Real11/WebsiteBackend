const SquareBoxModel = require("../models/squareBoxModel");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");


const getSquareBox = async (req, res) => {
  try {
    let data;
    data = await SquareBoxModel.findAll({
      where: {
        isDeleted: 0,
        type: req.query.type,
      },
      order: [["createdAt", "Asc"]],
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

  getSquareBox,
 
};
