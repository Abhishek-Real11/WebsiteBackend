const TermsAndCondition = require("../models/termsAndConditionModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createTermsAndCondition = async (req, res) => {
  try {
    const { value } = req.body;
    const title = req.body.title || "";
   
    if (!value)
      return res.status(200).send({
        success: true,
        data: "",
        message: "Please Add Some Content",
      });
    let slug;
    let data;
    if (title.length > 0) {
      slug = slugify(title, { lower:  true, strict: true });
    
      data = await TermsAndCondition.create({
        title: title,
        description: value,
        type: req.query.type,
        slug: slug,      
        subType:req.query.subType||null                                                              
      });                  
      return res.status(200).send({
        success: true,       
        data: data,                                                
        message: "Terms And Condition Added Successfully",           
      });       
    }    
 
     data = await TermsAndCondition.create({                    
      title: "",
      description: value,
      type: type,
      subType:req.query.subType||null                                                              
    });
    return res.status(200).send({
      success: true,
      data: data,
      message: "Terms And Condition Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error in Adding Terms And Condition",
    });
  }
};

const getTermsAndCondition = async (req, res) => {
  try {
    let data;
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    TermsAndCondition.findAndCountAll({ where: { isDeleted: 0 }, limit, offset })
      .then((data) => {
        const response = getPagingData(data, page, limit);
        return res.status(200).send({
          success: true,
          data: response,
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


const updateTermsAndCondition = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await TermsAndCondition.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await TermsAndCondition.update(
        { isActive: isActive },
        { where: { id: id } }
      );
      response(res, 200, true, isActive, "Status Updated Succesfully");
    } else {
      return res.status(400).send({
        success: false,
        data: "",
        message: "Please Change Status",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

const deleteTermsAndCondition = async (req, res) => {
  try {
    let result = await TermsAndCondition.findAll({ where: { id: req.query.id } });

    if (!result[0].dataValues.isDeleted) {
      let data = await TermsAndCondition.update(
        { isDeleted: true },
        { where: { id: req.query.id } }
      );
      return res.status(202).send({
        success: true,
        data: data,
        message: "Deleted Succesfully",
      });
    } else {
      return res.status(400).send({
        success: false,
        data: "",
        message: "Alreday Deleted",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Deletion Failed",
    });
  }
};

const editTermsAndCondition = async (req, res) => {
  try {
    let description = req.body.description;
    let id = req.query.id;
    let data = await TermsAndCondition.update(
      { description: description },
      { where: { id: id } }
    );
    return res.status(200).send({
      success: true,
      data: data,
      message: "Content change Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};



module.exports = {
  createTermsAndCondition,
  getTermsAndCondition,
  updateTermsAndCondition,
  deleteTermsAndCondition,
  editTermsAndCondition
};
