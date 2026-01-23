const express=require('express');
const app=express();
const data=require('./data');

app.get("/",(req,res)=>{
    res.send("server is running");
})

app.get("/user/:id/profile",(req,res)=>{
    const id= parseInt(req.params.id);
    let userId=data.find((user)=>user.id===id);
    res.json(userId);
})
app.listen(3000,()=>{
    console.log('Server is running');
})
