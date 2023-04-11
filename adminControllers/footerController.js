const Footer = require("../models/footerModel");
const addFooter = async (req, res) => {
  try {
    const type = req.query.type;
    if (type === "support") {
      let data = await Footer.create({
        address: req.body.address,
        email: req.body.email,
        concatNo: req.body.phone,
        type: req.query.type,
        SubType: req.body.sub_type,
      });
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Added SuccessFully",
      });
    }
    const { name, hyper_link, link } = JSON.parse(req.body.data);
    if (type === "social_media") {
      let data = await Footer.create({
        socialMeidaIcons: req.file.location,
        social_media_name: name,
        socialMeidaHyperLinks: hyper_link,
        type: req.query.type,
      });
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Added SuccessFully",
      });
    }
    if (type === "payment_partners") {
      let data = await Footer.create({
        paymentPartnerHyperLinks: link,
        paymentPartnerLogo: req.file.location,
        partnerName: name,
        type: req.query.type,
      });
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Added SuccessFully",
      });
    }
    if (type === "disclaimer") {
      let data = await Footer.create({
        disclaimer: req.body.disclaimer,
        type: req.query.type,
      });
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Added SuccessFully",
      });
    }
    return res.status(404).send({
      success: false,
      message: "Type Not Found",
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      data: "",
      message: error,
    });
  }
};

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

const editFooter = async (req, res) => {
  try {
    let type = req.query.type;
    if (!type) {
      return res.status(404).send({
        success: false,
        message: "Type Not Found",
      });
    }
    if (type === "support") {
      let data = await Footer.update(
        {
          address: req.body.address,
          Mail: req.body.email,
          ConcatNo: req.body.phone,
          SubType: req.body.sub_type,
        },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Edited SuccessFully",
      });
    }
    if (type === "social_meida") {
      let data = await Footer.update(
        {
          SocialMeidaIcons: req.body.SocialMeidaIcons,
          SocialMeidaHyperLinks: req.body.SocialMeidaHyperLinks,
        },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Edited SuccessFully",
      });
    }
    if (type === "payment_partners") {
      let data = await Footer.update(
        {
          PaymentPartnetHyperLinks: req.body.PaymentPartnetHyperLinks,
          PaymentPartnetLogo: req.body.PaymentPartnetLogo,
        },
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Edited SuccessFully",
      });
    }
  } catch ({ error }) {
    return res.status(400).send({
      success: false,
      message: "Error in Editing Data",
    });
  }
};

const deleteFooter = async (req, res) => {
  try {
    let type = req.type.type;
    if (typr === "support") {
      let data = await Footer.update(
        {
          address: req.body.address,
          Mail: req.body.email,
          ConcatNo: req.body.phone,
          SubType: req.body.sub_type,
        },  
        { where: { id: id } }
      );
      return res.status(200).send({
        success: true,
        data: data,
        message: "Data Edited SuccessFully",
      });
    }
  } catch (error) {}
};

module.exports = {
  addFooter,
  getFooter,
  editFooter,
  deleteFooter,
};
