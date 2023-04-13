const { and } = require("sequelize");
const Faqs = require("../models/faqModel");
require("dotenv").config();

const getfaqs = async (req, res) => {
  try {
    let data;
    let type = req.query.type || "all";

    if (type !== "all") {
      data = await Faqs.findAll({ where: { isActive: "1", type: type,isDeleted:0 } });
    } else {
      data = await Faqs.findAll({ where: { isActive: "1",isDeleted:0 } });
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
  getfaqs,
};
