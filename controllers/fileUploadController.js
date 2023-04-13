const image = require("../models/imageModel");
require("dotenv").config();

const getFile = async (req, res) => {
  try {
    const type = req.query.type || "all";

    if (type !== "all") {
      data = await image.findAll({ where: { isActive: "1", type: type,isDeleted:0 } });
    } else {
      data = await image.findAll({ where: { isActive: "1",isDeleted:0 } });
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


module.exports = {
  getFile,
};
