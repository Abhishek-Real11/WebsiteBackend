const AppFeaturesImageModel = require("../models/appFeaturesImageModel");

const getAppFeaturesImage = async (req, res) => {
  try {
    let data;
    data = await AppFeaturesImageModel.findAll({
      where: { type: req.query.type||"home" , isActive: 1, isDeleted: 0 },
    });
    return res.status(200).send({
      success: true,
      data: data,
      type:req.query.type,
      message: "Get SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });x
  }
};

module.exports = {
  getAppFeaturesImage,
};
