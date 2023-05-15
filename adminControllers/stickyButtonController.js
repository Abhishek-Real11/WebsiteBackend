const StickyButton = require("../models/stickyButtonMdoel");
require("dotenv").config();

const createStickyButton = async (req, res) => {
  try {
    const { link } = JSON.parse(req.body.data);

    let data = await StickyButton.create({
      image: req.file.location,
      url: link,
      type: req.query.type,
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Stikcy Button Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getStickyButton = async (req, res) => {
  try {
    let data;
    data = await StickyButton.findAll({
      where: {
        isDeleted: 0,
      },
      order: [["createdAt", "Asc"]],
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

const updateStikcyButton = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await StickyButton.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await StickyButton.update(
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

const deleteStickyButton = async (req, res) => {
  try {
    let result = await StickyButton.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await StickyButton.update(
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
      message: error,
    });
  }
};

const editSquareBox = async (req, res) => {
  try {
    let description = req.body.description;
    let title = req.body.title;

    let data = await SquareBoxModel.update(
      { description: description, title: title },
      { where: { id: req.query.id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Content change Successfully",
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
  createStickyButton,
  getStickyButton,
  updateStikcyButton,
  deleteStickyButton,
};
