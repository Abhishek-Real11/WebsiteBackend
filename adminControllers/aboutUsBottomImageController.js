const AboutUsBottomImage = require("../models/aboutUsBottomImageModel");
const addImage = async (req, res) => {
  try {
   
    const {subType}=JSON.parse(req.body.data);
    
    let data = await AboutUsBottomImage.create({
      image: req.file.location,
      type: req.query.type,
      subType:subType||null
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "About Us Image Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getImage = async (req, res) => {
  try {
    let data;
    data = await AboutUsBottomImage.findAll({ where: { isDeleted: 0 } });
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

const updateImageStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await AboutUsBottomImage.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await AboutUsBottomImage.update(
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

const deleteImage = async (req, res) => {
  try {
   
    let result = await AboutUsBottomImage.findAll({
      where: { id: req.query.id },
    });
   

    if (!result[0].dataValues.isDeleted) {
      let data = await AboutUsBottomImage.update(
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
  addImage,
  getImage,
  updateImageStatus,
  deleteImage,
};
