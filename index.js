const server=require("./app");

// - - - - - - - - - - - //
server.get("/",(req,res)=>{return res.end();})

server.listen(process.env.PORT,()=>console.log("express: ON"));
//npm start