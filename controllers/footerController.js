const Footer = require("../models/footerModel");

const getFooter = async (req, res) => {
  try {
    const type = req.query.type;

    if (type === "support") {
      let data = await Footer.findAll(
        { where: { type: type } },
        {
          attributes: ["address", "email", "ConcatNo", "SubType", "type"],
        }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Send Succesfully",
      });
    }
    if (type === "social_media") {
      let data = await Footer.findAll(
        { where: { type: type } },
        {
          attributes: [
            "socialMeidaIcons",
            "socialMeidaHyperLinks",
            "social_media_name",
          ],
        }
      );

      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Send Succesfully",
      });
    }
    if (type === "payment_partners") {
      let data = await Footer.findAll(
        { where: { type: type } },
        {
          attributes: [
            "paymentPartnerHyperLinks",
            "paymentPartnerLogo",
            "partnerName",
          ],
        }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Send Succesfully",
      });
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "Error in Getting Data",
    });
  }
};

module.exports = {
  getFooter,
};
