const DownloadBanner = require("../models/downloadBannerModel");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");
const addDownloadBanner = async (req, res) => {
  try {
    let data = await DownloadBanner.create({
      image: req.file.location,
      subType: req.query.subType,
    });

    return res.status(200).send({
      success: true,
      data: data,
      message: "Banner Added SuccessFully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const getDownloadBanner = async (req, res) => {
  try {
    
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);

    DownloadBanner.findAndCountAll({
      where: { isDeleted: 0, subType: req.query.subType },
      limit,
      offset,
    })
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

const updateDwonloadBannerStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await DownloadBanner.findAll({ where: { id: id } });

    if (isActive !== result[0].dataValues.isActive) {
      let data = await DownloadBanner.update(
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

const deleteDownloadBanner = async (req, res) => {
  try {
    let result = await DownloadBanner.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await DownloadBanner.update(
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
  addDownloadBanner,
  getDownloadBanner,
  updateDwonloadBannerStatus,
  deleteDownloadBanner
};
