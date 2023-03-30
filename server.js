const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const adminRoutes = require("./adminroutes/index");

app.use("/uploads", express.static("uploads"));
const path = require("path");
const connectDB = require("./config/connectDB.js");

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use("/v1", routes);
app.use("/v1/admin", adminRoutes);

app.listen(5000, (req, res) => {
  console.log(`Server Running on PORT : ${PORT}`);
});
