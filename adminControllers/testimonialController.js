const Testimonial = require("../models/testimonialModel");
const addTestimonial = async (req, res) => {
  try {
    console
    const { amount, quote } = JSON.parse(req.body.data);
    let data = await Testimonial.create({
      image: req.file.location,
      amount: amount,
      quote: quote,
      type: req.query.type,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Testimonial Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getTestimonial = async (req, res) => {
  try {
    let data;
    data = await Testimonial.findAll({
      where: { type: req.query.type, isDeleted: 0 },
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

const updateTestimonialStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await Testimonial.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await Testimonial.update(
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

const deleteTestimonial = async (req, res) => {
  try {
    let result = await Testimonial.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await Testimonial.update(
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
  addTestimonial,
  getTestimonial,
  updateTestimonialStatus,
  deleteTestimonial,
};
