const Content = require("../models/contentModel");

const create = async (req, res) => {
  try {
    const { value, type } = req.body;
    if (!value)
      return res.status(200).send({
        success: true,
        data: "",
        message: "Please Add Some Content",
      });
    const data = await Content.create({ description: value, type: type });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Content Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Content Added Not Successfully",
    });
  }
};

const getContent = async (req, res) => {
  try {
    const type = req.query.type || "all";
    if (type !== "all") {
      data = await Content.findAll({ where: { isActive: "1", type: type } });
    } else {
      data = await Content.findAll({});
    }
    // let data = await image.findAll({ where: { isActive:"1",  type:type } });
    if (data)
      return res.status(200).send({
        success: true,
        data: data,
        message: "Get Succesfully",
      });
  } catch (error) {}
};

const updateStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await Content.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await Content.update(
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

module.exports = {
  create,
  getContent,
  updateStatus,
};
