const Content = require("../models/contentModel");

const create=async(req,res)=>{
try {
  const {description,type}=req.body;
  const data=await Content.create({description:description,type:type})
  return res.status(200).send({
    success: true,
    data: data,
    message: "Content Added Successfully",
  });
} catch (error) {
  return res.status(400).send({
    success: false,
    data: "",
    message: "Content Added Not Successfully",
  });
}
}

const getContent=async(req,res)=>{
try {
  const type=req.query.type||"all"
    // if(type==="all"){
    //   let data = await image.findAll({ where: { isActive:"1" } });
    // }else{
    //   let data = await image.findAll({ where: { isActive:"1",type:type } });
    // }
    if (type !== "all") {
      data = await Content.findAll({ where: { isActive:"1", type: type } });
      console.log(data.description)
    } else {
      data = await Content.findAll({ where: {isActive:"1" } });
      console.log(data[2].description)
    }
    // let data = await image.findAll({ where: { isActive:"1",  type:type } });
    if (data)
      return res.status(200).send({
        success: true,
        data: data,
        message: "Get Succesfully",
      });
} catch (error) {
  
}
}


module.exports = {
    create,
    getContent
  };
