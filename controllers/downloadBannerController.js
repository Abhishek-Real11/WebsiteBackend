const DownloadBanner = require("../models/downloadBannerModel");
require("dotenv").config();

const getDownloadBanner = async (req, res) => {
  try {


    DownloadBanner.findAndCountAll({
      where: { isDeleted: 0, isActive:1},
     
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


module.exports = {
 
  getDownloadBanner,
  
};
