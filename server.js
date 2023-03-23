const express=require("express");
const app=express()
const PORT=process.env.PORT||5000; 
const cors=require("cors");
const bodyParser = require('body-parser')
const routes=require('./routes/index')
var multer = require('multer')
app.use('/uploads', express.static('uploads'));
const path = require('path');
const connectDB =require("./config/connectDB.js");

 connectDB();

app.use(bodyParser.json())
app.use(cors());

// app.get('/',async(req,res)=>{
// let sql='SELECT * FROM TEST_ADMIN';
// connection.query(sql,function(err,results){
//     if(err)console.log(err);
//     res.send(results)
// })
// })

app.use('/v1',routes)

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//        cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//     }
//  });
  
//  var upload = multer({ storage: storage });
//  app.post('/upload-avatar', upload.single('uploaded_file'), (req, res, next) => {
//     const file = req.file;
//     const {type}=req.query;
//     console.log(type)
//     if (!file) {
//        return res.status(400).send({ message: 'Please upload a file.' });
//     }
//     var sql = "INSERT INTO `website_real11`.`file` (`file_name`, `type`) VALUES ?";
//     var values=[
//         [req.file.filename,type]
//     ]
//     connection.query(sql, [values], function (err, result) {
//         if (err) return res.status(400).send(err);
//         return res.send({ message: 'File is successfully.',file });
   
//     })
//  });



app.listen(5000,(req,res)=>{
    console.log(`Server Running on PORT : ${PORT}`)
})