const express=require("express");
const app=express();
const port=8090


app.use("/home",(req,res)=>{
res.send("server is running in dashmode ");
});

app.use("/hellow",(req,res)=>{
res.send("hellow hellow hellow !..");
});

app.use("/test",(req,res)=>{
res.send("server is running in test mode.. ");
});


app.listen(port,()=>{
    console.log(`server is listing on port ${port}....`);
});