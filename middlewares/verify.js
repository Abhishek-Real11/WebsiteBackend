const jwt = require("jsonwebtoken");

const User = require("../models/userModel.js");
const SubAdmin = require("../models/subAdminModel");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const { token } = req.headers;


    if (!token) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
      if (err) {
        return res.status(401).send({
          success: false,
          data: "",
          token: {
            isExpired: true,
            message: "Token Expired, Please Log-in Again",
          },
        });
      }

      const { email, username } = payload;

      const result = await User.findOne({ where: { email: email } });
      const result1 = await SubAdmin.findOne({ where: { email: email } });

      if (result) {
        req.payload = result;
        next();
      } else if (result1) {
        req.payload = result1;
        next();
      } else {
        return res.status(400).send("Invalid Token");
      }
      // console.log("result",result)
      // req.payload = result;
      // next();
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
