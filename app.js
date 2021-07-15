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

// session() - express 가 각 브라우저를 위한 session id 를 만들고 브라우저에 보내주면, req 와 함께 해당 id 를 보내서 서버가 누구인지 쉽게 파악하게 함.
// 서버를 시작 할 때마다, 각 접근한 브라우저에게 백엔드에서 텍스트를 보냄
// 위 텍스트를, 새로고침 할 때마다(서버에 요청을 보낼 때마다), 텍스트와 서버에 같이 보내짐. application > cookies > localhost 에 나타남.
app.use(session({
    secret:"yep",
    resave:true,
    saveUninitialized:true,
}))

//쿠키(서버로 보내는 텍스트)를 확인하는 미들웨어.
app.use((req,res,next)=>{
    console.log(req.headers.cookie);
    console.log(req.session.id);    //브라우저 마다 다른 id 를 갖게 됨.
    req.sessionStore.potato += 1;   //session 은 jsObject 라서 커스텀 변수를 넣어서 사용할 수 있음. 새로고침 마다 카운트 증가.
})

//export default app;
module.exports=app;