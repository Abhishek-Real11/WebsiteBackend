var jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const User = require("../models/userModel.js");
const SubAdmin = require("../models/subAdminModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const response = require("../config/response");

const saltRounds = 10;
const regex = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);

const signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).send("Incorrect Data");
    }
    const data = await User.findOne({ where: { email: req.body.email } });
    if (data !== null) return res.send("User Already Exists!");
    let result = regex.test(password);
    if (result) {
      password = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        username: username,
        email: email,
        password: password,
      });
      response(res, 200, true, user, "SuccessFully Sign Up");
      // res.status(200).send(user);
    } else {
      return res
        .status(200)
        .send(
          "Password Must Be Eight Characters Including One Uppercase Letter, One Lowercase Letter, One Special Character And Alphanumeric Characters."
        );
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(404).send("Insufficient Data");
    }
    const data = await User.findOne({ where: { email: req.body.email } });
    const data1 = await SubAdmin.findOne({ where: { email: req.body.email } });

    if (data) {
      if (!data)
        return res.status(401).send({
          success: false,
          data: "",
          message: "Invalid Credentials",
        });
      let result = await bcrypt.compare(
        req.body.password,
        data.dataValues.password
      );

      if (result) {
        const payload = {
          email: data.dataValues.email,
          username: data.dataValues.username,
          roles: data.dataValues.roles,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "30m",
        });

        return res.status(200).send({
          success: true,
          token: token,
          user: payload,
          message: "User login successfully",
        });
      } else {
        return res
          .status(401)
          .send({ success: false, message: "Invalid Credentials" });
      }
    }
    if (data1) {
      if (!data1)
        return res.status(401).send({
          success: false,
          data: "",
          message: "Invalid Credentials",
        });
      console.log(data1.dataValues.isDeleted == 0, data1.dataValues.isActive);
      if (data1.dataValues.isDeleted == 1 || data1.dataValues.isActive == 0) {
        return res.status(401).send({
          success: false,
          data: "",
          message: "You have Not Acess to login",
        });
      }
      let result = await bcrypt.compare(
        req.body.password,
        data1.dataValues.password
      );
      let accessModule = JSON.parse(data1.dataValues.accessModule);
      let accessRoutes = JSON.parse(data1.dataValues.accessRoutes);
      if (result) {
        const payload = {
          email: data1.dataValues.email,
          username: data1.dataValues.username,
          roles: data1.dataValues.roles,
          accessModule: accessModule,
          accessRoutes: accessRoutes,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "30m",
        });

        return res.status(200).send({
          success: true,
          token: token,
          user: payload,
          accessModule: accessModule,
          message: "User login successfully",
        });
      } else {
        return res
          .status(401)
          .send({ success: false, message: "Invalid Credentials" });
      }
    }
    if (!data && !data1) {
      return res
        .status(400)
        .send({ success: false, message: "User Not Found" });
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send("Please Enter Email");
    }
    const data = await User.findOne({ where: { email: req.body.email } });
    if (data === null)
      return res.status(401).send({
        success: false,
        data: "",
        message: "User Doesn't Exists",
      });
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const result = await User.update(
      { otp: otp },
      { where: { email: req.body.email } }
    );
    if (result) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });
      let mailOptions = {
        from: process.env.email,
        to: email,
        subject: "Password Reset OTP",
        text: otp,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.status(400).send(error);
        } else {
          return res.status(200).send({
            success: true,
            data: info,
            message: "Otp send successfully",
          });
        }
      });
    }
  } catch (error) {
    return res.status(200).send(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    const data = await User.findOne({ where: { email: req.body.email } });
    if (!data)
      return res.status(401).send({
        success: false,
        data: "",
        message: "User Doesn't Exists",
      });

    if (otp === data.dataValues.otp) {
      let reg_result = regex.test(password);
      if (reg_result == false)
        return res.status(400).send({
          success: false,
          data: "",
          message:
            "Password Must Be Eight Characters Including One Uppercase Letter, One Lowercase Letter, One Special Character And Alphanumeric Characters.",
        });
      let newpassword = await bcrypt.hash(password, saltRounds);
      const result = await User.update(
        { password: newpassword },
        { where: { email: req.body.email } }
      );
      if (result)
        return res.status(200).send({
          success: true,
          data: "",
          message: "Otp Verified and Password Reset Successfully",
        });
    } else {
      return res.status(401).send({
        success: false,
        data: "",
        message: "OTP Verfication Failed",
      });
    }
  } catch (error) {
    return res.status(200).send(error);
  }
};

module.exports = {
  signup,
  login,
  getOtp,
  resetPassword,
};
