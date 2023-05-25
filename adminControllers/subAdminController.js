var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const SubAdmin = require("../models/subAdminModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const response = require("../config/response");

const saltRounds = 10;
const regex = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);

const createSubAdmin = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    password = await bcrypt.hash(password, saltRounds);

    const user = await SubAdmin.create({
      username: req.body.name,
      email: req.body.email,
      password: password,
      accessModule: req.body.modules,
      accessRoutes: req.body.routes,
    });

    return res.status(200).send({
      success: true,
      data: user,
      message: "Sub Admin Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};

const getSubAdmin = async (req, res) => {
  try {
    let data;

    SubAdmin.findAndCountAll({where:{isDeleted:0}})
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
            err.message ||
            "Some error occurred while retrieving TermsAndCondition.",
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

const updateSubAdminStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;
 

    let result = await SubAdmin.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
  
      let data = await SubAdmin.update(
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

const deleteSubAdmin = async (req, res) => {
  try {
    
    let result = await SubAdmin.findOne({
      where: { id: req.query.id },
    });

    if (!result['dataValues'].isDeleted) {
      let data = await SubAdmin.update(
        {
          isDeleted: true,
        },
        {
          where: { id: req.query.id },
        },
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
      message: error,
    });
  }
};

module.exports = {
  createSubAdmin,
  getSubAdmin,
  updateSubAdminStatus,
  deleteSubAdmin,
};
