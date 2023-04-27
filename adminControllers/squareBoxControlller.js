const SquareBoxModel = require("../models/squareBoxModel");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");
const createSquareBox = async (req, res) => {
  try {
    const { title,description } = JSON.parse(req.body.data);
    let data = await SquareBoxModel.create({
      image: req.file.location,
      title: title,
      description: description,
      type: req.query.type,
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Square Box  Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const get = async (req, res) => {
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

const updateSquareBoxStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await SquareBoxModel.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await SquareBoxModel.update(
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

const editSquareBox = async (req, res) => {
  try {
    
    let description = req.body.description;
    let title = req.body.title;
    
    let data = await SquareBoxModel.update(
      { description: description, title: title },
      { where: { id: req.query.id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Content change Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

module.exports = {
  createSquareBox,
  get,
  updateSquareBoxStatus,
  editSquareBox,
};
