const Trophy = require("../models/trophyModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createTrophy = async (req, res) => {
  try {
    const { title, verify } = JSON.parse(req.body.data);
   
    // console.log(title,description,req.file.location,req.query.type,req.query.subType)
    let data = await Trophy.create({
      winTrophy: req.files[0].location,
      transfermoney:req.files[1].location,
      title: title,
      verify: verify,
    });
   
    return res.status(200).send({
      success: true,
      data: data,
      message: "Trophy Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getTrophy = async (req, res) => {
  try {
    let data;
    Trophy.findAndCountAll({ where: { isDeleted: 0 } })
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

const updateTrophyStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await HowToPlayContent.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await HowToPlayContent.update(
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

const deleteTrophy = async (req, res) => {
  try {
    let result = await HowToPlayContent.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await HowToPlayContent.update(
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

const editContent = async (req, res) => {
  try {
    let description = req.body.description;
    let id = req.query.id;
    let data = await Content.update(
      { description: description },
      { where: { id: id } }
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
  createTrophy,
  getTrophy
};
