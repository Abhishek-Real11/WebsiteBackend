const StickyButton = require("../models/stickyButtonMdoel");
require("dotenv").config();

const getStickyButton = async (req, res) => {
  try {
    let data;
    data = await StickyButton.findAll({
      where: {
        isDeleted: 0,
        isActive:1
      },
      order: [["createdAt", "Asc"]],
    });
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
  getStickyButton,
};
