const FantasyCricket = require("../models/fantasyCricketModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const getFanatasyCricket = async (req, res) => {
  try {
    let data;

    FantasyCricket.findAll({
      where: { isDeleted: 0, isActive: 1, type: req.query.type },
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

const getSlug = async (req, res) => {
  try {
    let data = await FantasyCricket.findOne({
      where: { slug: req.params.slug },
    });
    if (data !== null) {
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Get SuccessFully",
      });
    } else {
      return res.status(404).send({
        success: false,
        data: "",
        message: "No Data Found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "error",
    });
  }
};

module.exports = {
  getFanatasyCricket,

  getSlug,
};
