const FooterDisclaimer = require("../models/footerDisclaimerModel");

const createFooterDisclaimer = async (req, res) => {
  try {
    const { value } = req.body;

    if (!value)
      return res.status(200).send({
        success: true,
        data: "",
        message: "Please Add Some Content",
      });
    let data;

    data = await FooterDisclaimer.create({
      disclaimer: value,
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Disclaimer Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error in Adding Disclaimer",
    });
  }
};

const getFooterDisclaimer = async (req, res) => {
  try {
    let data;

    FooterDisclaimer.findAll({
      where: { isDeleted: 0 },
    })
      .then((data) => {
        return res.status(200).send({
          success: true,
          data: data,
          message: "Get Succesfully",
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          message:
            err.message || "Some error occurred while retrieving Content.",
        });
      });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const updateFooterDisclaimer = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await FooterDisclaimer.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await FooterDisclaimer.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      response(res, 200, true, isActive, "Status Updated Succesfully");
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

const deleteFooterDisclaimer = async (req, res) => {
  try {
    let result = await FooterDisclaimer.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await FooterDisclaimer.update(
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

const editFooterDisclaimer = async (req, res) => {
  try {
    let value = req.body.value;
    let id = req.query.id;
    let data = await FooterDisclaimer.update(
      { discliamer: value },
      { where: { id: id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Disclaimer Edited Successfully",
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
  createFooterDisclaimer,
  getFooterDisclaimer,
  updateFooterDisclaimer,
  editFooterDisclaimer,
  deleteFooterDisclaimer,
};
