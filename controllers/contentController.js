const Content = require("../models/contentModel");

const getContent = async (req, res) => {
  try {
    let type = req.query.type || "all";
    if (type == "cricket-tc") {
      data = await Content.findAll({
        where: { type: type, isActive: "1", isDeleted: 0 },
      });
    } else{
      data = await Content.findAll({
        where: { isActive: "1", type: type, isDeleted: 0 },
      });
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
      message: "Error",
    });
  }
};

module.exports = {
  getContent,
};
