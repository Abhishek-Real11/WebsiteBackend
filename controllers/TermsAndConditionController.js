const TermsAndCondition = require("../models/termsAndConditionModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");


const getTermsAndCondition = async (req, res) => {
  try {
    let data;
    

    TermsAndCondition.findAll({ where: { isDeleted: 0,isActive:1 }, order: [["createdAt", "Asc"]],})
      .then((data) => {
        // const response = getPagingData(data, page, limit);
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
 
  getTermsAndCondition,
  
};
