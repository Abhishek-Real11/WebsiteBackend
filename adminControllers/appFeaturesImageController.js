const AppFeaturesImageModel = require("../models/appFeaturesImageModel");
const addAppFeaturesImage = async (req, res) => {
  try {
    let data = await AppFeaturesImageModel.create({
      image: req.file.location,
      type: req.query.type || "home",
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "App Features Image Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getAppFeaturesImage = async (req, res) => {
  try {
    let data;
    data = await AppFeaturesImageModel.findAll({ where: { type:req.query.type,isDeleted: 0 } });
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

const updateAppFeaturesImageStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await AppFeaturesImageModel.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await AppFeaturesImageModel.update(
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

const deleteAppFeaturesImage = async (req, res) => {
  try {
    let result = await AppFeaturesImageModel.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await AppFeaturesImageModel.update(
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
  addAppFeaturesImage,
  getAppFeaturesImage,
  updateAppFeaturesImageStatus,
  deleteAppFeaturesImage,
};
