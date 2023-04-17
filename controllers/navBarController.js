const NavBarModel = require("../models/navBarModel");
require("dotenv").config();
const slugify = require("slugify");
const { getPagination, getPagingData } = require("../config/paginate");

const getNavBar = async (req, res) => {
    try {
        let data;
        data = await NavBarModel.findAll({where:{
          isDeleted:0,
          isActive:1
        },order: [
          ['order', 'Asc'],
      ]});
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
 getNavBar
};
