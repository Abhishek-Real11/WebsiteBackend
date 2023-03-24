const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY ="eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTU0NjQ1MiwiaWF0IjoxNjc5NTQ2NDUyfQ.Rwf-BnnWQsGu2CoVxeRPu1PjFdf-yRUoYlTwIKWZDgE";
const User = require("../models/userModel.js");

module.exports=async(req,res,next)=>{
    try {
        const {token}=req.headers;
        if(!token){
            return res.status(401).json({error:"you must be logged in"})
         }
       
         jwt.verify(token,JWT_SECRET_KEY,async(err,payload)=>{
            // console.log(payload)
        if(err){
         return   res.status(401).json(err)
        }
        
         const {email,username} = payload
        // console.log(id)
         const result=await User.findOne({where:{email:email}})
        if(!result){    
            return  res.status(400).send("Invalid Token")
        }
        // res.send(result)
        // console.log(result)
        // console.log(result.tree);
        req.payload=payload
        next();
        // User.find({_id:id}).then(userdata=>{
        //     req.user = userdata
        //     console.log("1",userdata)
        //     next()
        // })
        
        
    })
    } catch (error) {
        res.status(400).send(error)
    }
}