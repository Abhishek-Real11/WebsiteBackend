const express=require("express");
const app=express()
const PORT=process.env.PORT||5000; 
const cors=require("cors");
const bodyParser = require('body-parser')
const routes=require('./routes/index')

app.use('/uploads', express.static('uploads'));
const path = require('path');
const connectDB =require("./config/connectDB.js");
const connection=require("./database")
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
 connectDB();

app.use(bodyParser.json())
app.use(cors());

app.use('/v1',routes)

 app.get('/getimage',(req,res,next)=>{
    try {
        console.log("1")
        var sql='SELECT * FROM `website_real11`.`file`';
        connection.query(sql, function (err, result) {
            console.log(result)
            if (err) return res.status(400).send(err);
            res.json(result[0].file_name)
        })
    } catch (error) {
        
    }
 })



app.listen(5000,(req,res)=>{
    console.log(`Server Running on PORT : ${PORT}`)
})