const SquareBoxModel = require("../models/squareBoxModel");
require("dotenv").config();
const { getPagination, getPagingData } = require("../config/paginate");
const createSquareBox = async (req, res) => {
 try {
    let data=await SquareBoxModel.create({
        image:req.file.location,
        title:req.body.title,
        description:req.body.description,
        type:req.body.type
    })
    return res.status(200).send({
        success: true,
        data: data,
        message: "Nav Bar List Added Successfully",
      });
 } catch (error) {
    return res.status(400).send({
        success: true,
        data: data,
        message: "Nav Bar List Added Successfully",
      });
 }
};

const get = async (req, res) => {
  
};


module.exports = {
    createSquareBox,
 get
};
