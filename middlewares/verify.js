const jwt = require("jsonwebtoken");
JWT_SECRET_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTU0NjQ1MiwiaWF0IjoxNjc5NTQ2NDUyfQ.Rwf-BnnWQsGu2CoVxeRPu1PjFdf-yRUoYlTwIKWZDgE";
const User = require("../models/userModel.js");

module.exports = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    jwt.verify(token, JWT_SECRET_KEY, async (err, payload) => {
      if (err) {
        return res.status(200).send({
          success: false,
          data: "",
          message: "JWT Expired, Please Log-in Again",
        });
      }

      const { email, username } = payload;

      const result = await User.findOne({ where: { email: email } });
      if (!result) {
        return res.status(400).send("Invalid Token");
      }

      req.payload = result;
      next();
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
