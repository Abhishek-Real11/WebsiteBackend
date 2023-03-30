const Testimonial = require("../models/testimonialModel");
const addTestimonial = async (req, res) => {
  try {
    const { amount, quote, type } = JSON.parse(req.body.data);

    let data = await Testimonial.create({
      image: req.file.location,
      amount: amount,
      quote: quote,
      type: type,
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
    data = await Testimonial.findAll({});
    return res.status(200).send({
      success: false,
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

const updateStatus = async (req, res) => {
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

module.exports = {
  addTestimonial,
  getTestimonial,
  updateStatus,
};
