const image = require("../models/imageModel");
require("dotenv").config();

const getFile = async (req, res) => {
  try {
    const type = req.query.type || "all";

    if (type !== "all") {
      data = await image.findAll({ where: { isActive: "1", type: type } });
    } else {
      data = await image.findAll({ where: { isActive: "1" } });
    }

    if (data)
      return res.status(200).send({
        success: true,
        data: data,
        message: "Get Succesfully",
      });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const deleteFile = async (req, res) => {
  try {
    let data = await image.update(
      { isDeleted: true },
      { where: { id: req.query.id } }
    );

    return res.status(200).send({
      success: true,
      data: data,
      message: "Deleted Succesfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Deletion Failed",
    });
  }
};

module.exports = {
  getFile,

  deleteFile,
};
