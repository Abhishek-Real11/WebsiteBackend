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
    console.log(req.body)
    let { name, email, password } = req.body;
    // const data = await SubAdmin.findOne({ where: { email: req.body.email } });
    // if (data !== null) return res.send("User Already Exists!");
    console.log(name,email,password,req.body.modules)
 
      password = await bcrypt.hash(password, saltRounds);
      console.log(password)
      const user = await SubAdmin.create({
        username: req.body.name,
        email: req.body.email,
        password: password,
        accessModule:req.body.modules
      })
      console.log(user)
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

  
      SubAdmin.findAndCountAll({ })
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
              err.message || "Some error occurred while retrieving TermsAndCondition.",
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
  createSubAdmin,
  getSubAdmin
};
