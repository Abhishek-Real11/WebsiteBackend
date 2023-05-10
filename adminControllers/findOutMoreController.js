const FindOutMore = require("../models/findOutMoreFooterModel");

const createFindOutMore = async (req, res) => {
  try {
    
    let data;

    data = await FindOutMore.create({
        title: req.body.heading,
        path:req.body.path

    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error in Adding title",
    });
  }
};

const getFindOutMore = async (req, res) => {
  try {
    let data;

    FindOutMore.findAll({
      where: { isDeleted: 0 },
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

const updateFindOutMoreStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await FindOutMore.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await FindOutMore.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: " Status updated Successfully",
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

const deleteFindOutMore = async (req, res) => {
  try {
    let result = await FindOutMore.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await FindOutMore.update(
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
  createFindOutMore,
  getFindOutMore,
  updateFindOutMoreStatus,
  deleteFindOutMore
};
