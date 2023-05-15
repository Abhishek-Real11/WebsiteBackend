const PressRelease = require("../models/pressReleaseModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createPressRelease = async (req, res) => {
  try {
    const { title, description,url,value } = JSON.parse(req.body.data);
    let data = await PressRelease.create({
      image: req.file.location,
      title: title,
      description: description,
      url:url,
      content:value
    });
   
    return res.status(200).send({
      success: true,
      data: data,
      message: "Press Release Content Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getPressRelease = async (req, res) => {
    try {
      let data;
      const { page, size } = req.query;
  
      const { limit, offset } = getPagination(page, size);
      PressRelease.findAndCountAll({ where: { isDeleted: 0 } })
        .then((data) => {
          const response = getPagingData(data, page, limit);
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
  
  const updateStatus = async (req, res) => {
    try {
      let id = req.query.id;
      let isActive = req.query.isActive;
  
      let result = await PressRelease.findAll({ where: { id: id } });
  
      if (isActive != result[0].dataValues.isActive) {
        let data = await PressRelease.update(
          { isActive: isActive },
          { where: { id: id } }
        );
        response(res, 200, true, isActive, "Status Updated Succesfully");
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
  
  const deletePress = async (req, res) => {
    try {
      let result = await PressRelease.findAll({
        where: { id: req.query.id },
      });
  
      if (!result[0].dataValues.isDeleted) {
        let data = await PressRelease.update(
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
    createPressRelease,
    getPressRelease,
    updateStatus,
    deletePress
  };
  