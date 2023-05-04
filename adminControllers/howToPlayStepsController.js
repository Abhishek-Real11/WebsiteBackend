const HTPSteps = require("../models/htPStepsModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createSteps = async (req, res) => {
  try {
    const { title, description } = JSON.parse(req.body.data);
    let data = await HTPSteps.create({
      image: req.files[0].location,
      vrline:req.files[1].location,
      title: title,
      description: description,
      type: req.query.type,
      subType: req.query.subType,
    });
   
    return res.status(200).send({
      success: true,
      data: data,
      message: "Steps Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getSteps = async (req, res) => {
  try {
    let data;
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);
    HTPSteps.findAndCountAll({ where: { isDeleted: 0 } })
      .then((data) => {
        const response = getPagingData(data, page, limit);
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

const updateStepsStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await HTPSteps.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await HTPSteps.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      response(res, 200, true, isActive, "Status Updated Succesfully");
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

const deleteSteps = async (req, res) => {
  try {
    let result = await HTPSteps.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await HTPSteps.update(
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

const getSlug = async (req, res) => {
  try {
    let data = await Content.findOne({ where: { slug: req.params.slug } });
    if (data !== null) {
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Get SuccessFully",
      });
    } else {
      return res.status(404).send({
        success: false,
        data: "",
        message: "No Data Found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "error",
    });
  }
};



module.exports = {
  createSteps,
  getSteps,
  updateStepsStatus,
  deleteSteps
};
