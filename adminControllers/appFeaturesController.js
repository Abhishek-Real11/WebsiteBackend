const AppFeaturesModel = require("../models/appFeaturesModel");
const addAppFeatures = async (req, res) => {
  try {
    const { title, description } = JSON.parse(req.body.data);
    let data = await AppFeaturesModel.create({
      logo: req.file.location,
      title: title,
      description: description,
      type: req.query.type,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "App Features Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getAppFeatures = async (req, res) => {
  try {
    let data;
    data = await AppFeaturesModel.findAndCountAll({ where: { isDeleted: 0 } });
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

const updateAppFeaturesStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await AppFeaturesModel.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await AppFeaturesModel.update(
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

const deleteAppFeatures = async (req, res) => {
  try {
    console.log(req.query.id)
    let result = await AppFeaturesModel.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await AppFeaturesModel.update(
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
  addAppFeatures,
  getAppFeatures,
  updateAppFeaturesStatus,
  deleteAppFeatures,
};
