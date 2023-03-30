const Testimonial = require("../models/testimonialModel");

const getTestimonial = async (req, res) => {
  try {
    let data;
    let type = req.query.type || "all";

    if (type !== "all") {
      data = await Testimonial.findAll({
        where: { isActive: "1", type: type },
      });
    } else {
      data = await Testimonial.findAll({ where: { isActive: "1" } });
    }
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

module.exports = {
  getTestimonial,
};
