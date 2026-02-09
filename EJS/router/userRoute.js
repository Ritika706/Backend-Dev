import express from "express";
import { userData } from "../data.js";
const router=express.Router();

//get user page
router.get("/user", (req, res) => {
  res.render("user", { userData });
});
//add user
router.post("/user", (req, res) => {
  const { name, age } = req.body;

  let newUserData = {
    id: userData.length + 1,
    name,
    age: Number(age),
  };

  userData.push(newUserData);

  res.redirect("/api/user");
});
//delete user
router.delete("/user/:id",(req,res)=>{
    const userId = Number(req.params.id);
    const userindex = userData.findIndex((ele)=>ele.id === userId);
    if(userId == -1){
        return res.send("user not found")
    }
    userData.splice(userindex,1);
    res.redirect("/api/user")
})
//update user
router.put("/user/:id",(req,res)=>{
  const {name,age}=req.body;
  const id = parseInt(req.params.id);
  const userindex = userData.findIndex((ele)=> ele.id === id);
  if(userindex==-1){
    return res.send("user not found")
  }
  userData[userindex] = {id,name,age};
  res.redirect('/api/user');

})
export default router;