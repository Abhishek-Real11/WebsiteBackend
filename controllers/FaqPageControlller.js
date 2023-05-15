const FaqPage = require("../models/faqPageModel");
const { getPagination, getPagingData } = require("../config/paginate");

const addfaqs = async (req, res) => {
  try {
    const data = req.body;
    const subType = req.body.subType || NULL;
    let data1 = await FaqPage.create({
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

    FaqPage.findAll({
      where: { isDeleted: 0, type: req.query.type,isActive:1 },
      order: [["createdAt", "Asc"]],
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
const updateFaqsStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await FaqPage.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await FaqPage.update(
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
    let result = await FaqPage.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await FaqPage.update(
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
  updateFaqsStatus,
  deleteFaqs,
};
