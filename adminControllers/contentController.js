const Content = require("../models/contentModel");
const slugify = require("slugify");

const create = async (req, res) => {
  try {
    const { title, value, type } = req.body;
    if (!value)
      return res.status(200).send({
        success: true,
        data: "",
        message: "Please Add Some Content",
      });

    const slug = slugify(title, { lower: true, strict: true });

    const data = await Content.create({
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
    console.log("1");
    data = await Content.findAll({});

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
