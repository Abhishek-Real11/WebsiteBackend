const Faqs = require("../models/faqModel");
const { getPagination, getPagingData } = require("../config/paginate");

const addfaqs = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const subType = req.body.subType || "";
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
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Faqs.findAndCountAll({ limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        return res.status(200).send({
          success: true,
          data: response,
          message: "Get Succesfully",
        });
      })
      .catch((err) => {
        res.status(500).send({
          success: false,
          message: err.message || "Some error occurred while retrieving FAQS.",
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

const deleteFaqs = async (req, res) => {
  try {
    let result = await Faqs.findAll({ where: { id: req.query.id } });
    // console.log(result)

    if (!result[0].dataValues.isDeleted) {
      let data = await Faqs.update(
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

module.exports = {
  addfaqs,
  getfaqs,
  updateStatus,
  deleteFaqs,
};
