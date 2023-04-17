const NavBarModel = require("../models/navBarModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");
const createNavBar = async (req, res) => {
 try {
    let data=await NavBarModel.create({
        listname:req.body.name,
        slug:req.body.tile,
        url:req.body.title,
        order:req.body.order,
        className:req.body.design    
    });
    return res.status(200).send({
        success: true,
        data: data,
        message: "Nav Bar List Added Successfully",
      });
 } catch (error) {
    return res.status(400).send({
        success: false,
        data: "",
        message: "Error",
      });
 }
};

const getNavBar = async (req, res) => {
    try {
        let data;
        data = await NavBarModel.findAll({where:{
          isDeleted:0
        },order: [
          ['order', 'Asc'],
      ],});
        return res.status(200).send({
          success: true,
          data: data,
          message: "Get SuccessFully",
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
 createNavBar,
 getNavBar
};
