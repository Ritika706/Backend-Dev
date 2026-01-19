const express=require("express");
const app=express();

//routing
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/user",(req,res)=>{
    res.send("user route");
})
app.get("/userdetails",(req,res)=>{
    let user={name:"John Doe",
        age:30,
        city:"New York"}
    res.status(200).json(user);
})
app.get("/about",(req,res)=>{
    res.send("about route");
})
app.get("/contact",(req,res)=>{
    res.send("contact route");
})
app.get("/help",(req,res)=>{
    res.send("help route");
})
app.get("/services",(req,res)=>{
    res.send("services route");
})
app.get("/products",(req,res)=>{
    res.send("products route");
})
app.get("/login",(req,res)=>{
    res.send("login route");
})
app.get("/register",(req,res)=>{
    res.send("register route");
})
app.listen(3000,()=>{
    console.log("server is running");
})