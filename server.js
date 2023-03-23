const express=require("express");
const app=express()
const PORT=process.env.PORT||5000; 
var connection = require('./database');
const cors=require("cors");
const bodyParser = require('body-parser')
const routes=require('./routes/index')

connection.connect(function (err,sucess) {
    
    if(err){
        console.log("error occurred while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

app.use(bodyParser.json())
app.use(cors());

app.get('/',async(req,res)=>{
let sql='SELECT * FROM TEST_ADMIN';
connection.query(sql,function(err,results){
    if(err)console.log(err);
    res.send(results)
})
})

app.use('/v1',routes)




app.listen(5000,(req,res)=>{
    console.log(`Server Running on PORT : ${PORT}`)
})