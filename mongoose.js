const mongoose=require("mongoose");

///////해당 dotenv 는 어느 .js file 에서든 맨 처음에 한번 쓰면 어디서든 process.env. 사용가능
//
//require('dotenv').config({path:'.env'});
//require("dotenv").config({path: `${__dirname}/.env`});
//require('dotenv').config();

//require("dotenv").config({path: `${__dirname}/.env.${process.env.NODE_ENV}`});
// -> NODE_ENV=development node index.js  /or/ npm start
//
///////


//"mongoURL/DBNAME"
mongoose.connect(process.env.MONGO+process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

mongoose.connection.on("error",(error)=>{console.log("mongo: ERROR- ",error)});
mongoose.connection.once("open",()=>{console.log("mongo: ON")});