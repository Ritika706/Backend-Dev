import express from 'express';
import galleryRoute from './router/galleryRoute.js';
import userRoute from './router/userRoute.js';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();//eject krne k liye .env file m se

const app=express();
let PORT=process.env.PORT || 3000;

app.set("view engine",'ejs');
app.use("/static",express.static(path.join(process.cwd(),'public')));

app.use("/api",galleryRoute);
app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});