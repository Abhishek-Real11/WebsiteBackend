const Content = require("../models/contentModel");
const slugify = require("slugify");
const response = require("../config/response");

const create = async (req, res) => {
  try {
    const { value, type } = req.body;
    const title = req.body.title || "";
    if (!value)
      return res.status(200).send({
        success: true,
        data: "",
        message: "Please Add Some Content",
      });
    let slug;
    let data;
    if (title.length > 0) {
      slug = slugify(title, { lower: true, strict: true });
      data = await Content.create({
        title: title,
        description: value,
        type: type,
        slug: slug,
      });
      return res.status(200).send({
        success: true,
        data: data,
        message: "Content Added Successfully",
      });
    }

    data = await Content.create({
      title: "",
      description: value,
      type: type,
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Content Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error in Adding Content",
    });
  }
};

const getContent = async (req, res) => {
  try {
    data = await Content.findAll({});

    if (data) response(res, 200, true, data, "Get Succesfully");
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
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
      response(res, 200, true, isActive, "Status Update Succesfully");
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

const deleteFile = async (req, res) => {
  try {
    let result = await Content.findAll({ where: { id: req.query.id } });
    console.log(result[0].dataValues.isDeleted);
    if (!result[0].dataValues.isDeleted) {
      let data = await Content.update(
        { isDeleted: true },
        { where: { id: req.query.id } }
      );
      return res.status(200).send({
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
  create,
  getContent,
  updateStatus,
  deleteFile,
};
