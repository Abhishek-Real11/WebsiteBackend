const FantasyCricketPoints = require("../models/fantasyCricketPointsModel");
const { getPagination, getPagingData } = require("../config/paginate");

const createFantasyCricketPoints = async (req, res) => {
  try {
  
    let data = await FantasyCricketPoints.create({
      gameType: req.query.gameType || null,
      actionName: req.query.action_name,
      actionPoints: req.body.data,
      // description: req.body.value,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "content Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getFantasyCricketPoints = async (req, res) => {
  try {
    let data;
    if (req.query.gameType) {
      FantasyCricketPoints.findAll({
        where: {
          isDeleted: 0,
          gameType: req.query.gameType,
          actionName: req.query.action_name,
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
    } else {
      FantasyCricketPoints.findAll({
        where: {
          isDeleted: 0,
          type: req.query.type,
          actionName: req.query.action_name,
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

const updateStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await FantasyCricket.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await FantasyCricket.update(
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

const deleteContent = async (req, res) => {
  try {
    let result = await FantasyCricket.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await FantasyCricket.update(
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
    let data = await FantasyCricket.findOne({
      where: { slug: req.params.slug },
    });
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

const editFantasyCricketPoints = async (req, res) => {
  try {
    let actionPoints = req.body.point1;
    let data = await FantasyCricketPoints.update(
      { actionPoints: actionPoints },
      { where: { id: req.query.id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Updated Successfully",
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
  createFantasyCricketPoints,
  getFantasyCricketPoints,
  editFantasyCricketPoints,
};
