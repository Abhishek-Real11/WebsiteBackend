const HowToPlayTable = require("../models/HowToPlayTableModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createTable = async (req, res) => {
  try {
    console.log(req.body.data)
    let data = await HowToPlayTable.create({
      playerType:req.body.data.playerType,
      min:req.body.data.Min,
      max:req.body.data.Max,
      type:req.query.type,
      subType:req.query.subType
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Table data Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getTable = async (req, res) => {
  try {
    let data;
    data = await HowToPlayTable.findAndCountAll({ where: { isDeleted: 0 } });
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

const updateTableStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await HowToPlayTable.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await HowToPlayTable.update(
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

const deleteTable = async (req, res) => {
  try {
    let result = await HowToPlayTable.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await HowToPlayTable.update(
        { isDeleted: true },
        { where: { id: req.query.id } }
      );
      return res.status(202).send({
        success: true,
        data: data,
        message: "Deleted Succesfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        data: "",
        message: "Alreday Deleted",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Deletion Failed",
    });
  }
};

module.exports = {
  createTable,
  getTable,
  updateTableStatus,
  deleteTable,
};
