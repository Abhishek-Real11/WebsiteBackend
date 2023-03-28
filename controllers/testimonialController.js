const Testimonial = require("../models/testimonialModel");
const addTestimonial = async (req, res) => {
  try {
    const { amount, quote, type } = JSON.parse(req.body.data);
    console.log(amount+" "+quote+" "+type)
    console.log(req.file)
    let data = await Testimonial.create({
      image: req.file.location,
      amount: amount,
      quote: quote,
      type: type,
    });
    console.log("1")
    return res.status(200).send({
      success: true,
      data: data,
      message: "Success",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getaddTestimonial = async (req, res) => {
  try {
    let data; 
     data = await Testimonial.findAll({})
     return res.status(200).send({
      success: false,
      data: data,
      message: 'Get SuccessFully',
    });
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
  getaddTestimonial,
};
