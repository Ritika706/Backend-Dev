import express from "express";
import { userData } from "../data.js";
const router=express.Router();

router.get("/",(req,res)=>{
  res.render("index")
})


router.get ("/editpage/:id",(req,res)=>{
  const id = Number(req.params.id);
  const user = userData.find((ele)=> ele.id === id);
  if(!user){
    return res.send("user not found");
  }
  res.render("edit", {user})
})
export default router;
