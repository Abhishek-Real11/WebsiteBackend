const AboutUsFooter = require("../models/aboutUsFooterModel");

const getAboutUs = async (req, res) => {
  try {
    let data;

    AboutUsFooter.findAll({
      where: { isDeleted: 0, isActive: 1 },order: [["createdAt", "Asc"]],
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

module.exports = {
  getAboutUs,
};
