const FantasyCricket = require("../models/fantasyCricketModel");
const FantasyCricketLeague = require("../models/fantasyCricketLeagueModel");
const slugify = require("slugify");
const response = require("../config/response");
const { getPagination, getPagingData } = require("../config/paginate");

const createFanatasyCricket = async (req, res) => {
  try {
    const { description } = req.body;
    let data;

    if (req.query.type == "fantasycricket") {
     data=await FantasyCricket.create({
        description: description,
        type: req.query.type,
        slug: "fantasy-cricket",
      });
    }else if(req.query.type == "fantasyfootball"){
     data= await FantasyCricket.create({
       description: description,
        type: req.query.type,
        slug: "fantasy-football",
      });
    }else if(req.query.type == "fantasykabaddi"){
      data=await FantasyCricket.create({
        description: description,
        type: req.query.type,
        slug: "fantasy-kabaddi",
      });
    }else if(req.query.type=="playLudo"){
      data=await FantasyCricket.create({
        description: description,
        type: req.query.type,
        slug: "play-ludo-online",
      });
    }else if(req.query.type=="fantasycricketapp"){
      data=await FantasyCricket.create({
        description: description,
        type: req.query.type,
        slug: "fantasy-cricket-app",
      });
    }else if(req.query.type=="fantasycricketleague"){
      data=await FantasyCricket.create({
        description: description,
        type: req.query.type,
        slug: "fantasy-cricket-league",
      });
    }
    

    return res.status(200).send({
      success: true,
      data: data,
      message: "content Added Successfully",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "Error",
    });
  }
};

const getFanatasyCricket = async (req, res) => {
  try {
    let data;
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);
    FantasyCricket.findAndCountAll({ where: { isDeleted: 0 } })
      .then((data) => {
        const response = getPagingData(data, page, limit);
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

const updateStatus = async (req, res) => {
  try {
    let id = req.query.id;
    let isActive = req.query.isActive;

    let result = await FantasyCricket.findAll({ where: { id: id } });

    if (isActive != result[0].dataValues.isActive) {
      let data = await FantasyCricket.update(
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

const deleteContent = async (req, res) => {
  try {
    let result = await FantasyCricket.findAll({
      where: { id: req.query.id },
    });

    if (!result[0].dataValues.isDeleted) {
      let data = await FantasyCricket.update(
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

const getSlug = async (req, res) => {
  try {
    let data = await FantasyCricket.findOne({
      where: { slug: req.params.slug },
    });
    if (data !== null) {
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Get SuccessFully",
      });
    } else {
      return res.status(404).send({
        success: false,
        data: "",
        message: "No Data Found",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: "error",
    });
  }
};

const editContent = async (req, res) => {
  try {
    let description = req.body.description;
    let id = req.query.id;
    let data = await FantasyCricket.update(
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

const getFanatasyCricketLeague = async (req, res) => {
  try {
    let data;
    const { page, size } = req.query;

    const { limit, offset } = getPagination(page, size);
    FantasyCricketLeague.findAndCountAll({ where: { isDeleted: 0 } })
      .then((data) => {
        const response = getPagingData(data, page, limit);
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

const createFanatasyCricketLeague = async (req, res) => {
  try {
    const { title, description } = JSON.parse(req.body.data);
    let data;

     data=await FantasyCricketLeague.create({
        description: description,
        image:req.file.locatoion
      });
   
    return res.status(200).send({
      success: true,
      data: data,
      message: "Fantasy Cricket League Conetent Added Successfully",
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
  createFanatasyCricket,
  getFanatasyCricket,
  updateStatus,
  deleteContent,
  getSlug,
  editContent,
  getFanatasyCricketLeague
};
