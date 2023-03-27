const { and } = require("sequelize");
const Faqs = require("../models/faqModel");
require("dotenv").config();
const addfaqs = async (req, res) => {
  try {
    const data = req.body;

    let data1 = await Faqs.create({
      ques: data.ques,
      answer: data.answer,
      type: data.type,
      subType: data.subType,
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
    let type = req.query.type || "all";

    if (type !== "all") {
      data = await Faqs.findAll({ where: { status: "activate", type: type } });
    } else {
      data = await Faqs.findAll({ where: { status: "activate" } });
    }

    return res.status(200).send(data);
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
};
