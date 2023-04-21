const AppFeaturesModel = require("../models/appFeaturesModel");

const getAppFeatures = async (req, res) => {
  try {
    let data;
    data = await AppFeaturesModel.findAndCountAll({
      where: { isActive: "1", isDeleted: 0 },order: [
        ['createdAt', 'Asc'],
    ]
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
  getAppFeatures,
};
