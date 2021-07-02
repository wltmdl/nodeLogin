if(process.env.NODE_ENV){
    require('dotenv').config({path:`${__dirname}/.env.${process.env.NODE_ENV}`})
}else{
    require('dotenv').config();
}

const server=require("./app");

// - - - - - - - - - - - //
server.get("/",(req,res)=>{return res.end();})

server.listen(process.env.PORT,()=>console.log("express: ON"));
//npm start