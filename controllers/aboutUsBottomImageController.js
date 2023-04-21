const AboutUsBottomImage = require("../models/aboutUsBottomImageModel");

const getImage = async (req, res) => {
  try {
    let data;
    data = await AboutUsBottomImage.findAll({ where: { isActive:1, isDeleted: 0 } });
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
  
  getImage,
 
};
