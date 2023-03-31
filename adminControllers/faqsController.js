const { and } = require("sequelize");
const Faqs = require("../models/faqModel");
require("dotenv").config();
const addfaqs = async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const subType=req.body.subType||""
    let data1 = await Faqs.create({
      ques: data.ques,
      answer: data.answer,
      type: data.type,
      subType: subType,
    });

    return res.status(200).send({
      success: true,
      data: data1,
      message: "FAQS added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getfaqs = async (req, res) => {
  try {
    let data;

    data = await Faqs.findAll({});
    return res.status(200).send({
      success: true,
      data: data,
      message: "ALL Faqs Sent Successfully",
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

    let result = await Faqs.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await Faqs.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: isActive,
        message: "Status Updated Succesfully",
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
  addfaqs,
  getfaqs,
  updateStatus,
};
