if(process.env.NODE_ENV){
    require('dotenv').config({path:`${__dirname}/.env.${process.env.NODE_ENV}`})
}else{
    require('dotenv').config();
}

//import express from "express";
const express=require("express");
const session=require("express-session");

const mongoose=require("./mongoose");

const app=express();

//새로고침 할 때마다(서버에 요청을 보낼 때마다), 텍스트가 서버에 같이 보내짐. application > cookies > localhost 에 나타남.
app.use(session({
    secret:"yep",
    resave:true,
    saveUninitialized:true,
}))

//쿠키(서버로 보내는 텍스트)를 확인하는 미들웨어.
app.use((req,res,next)=>{
    console.log(req.headers.cookie);
})

//export default app;
module.exports=app;