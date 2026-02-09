import express from "express";
import methodOverride from "method-override";

import pageRoute from "./router/pageRoute.js";
import userRoute from "./router/userRoute.js";
const app = express();


app.set("view engine", "ejs");

// middleware mae url mae output aayega form m submit krne se toh use object m convert krega yeh
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/page",pageRoute)
app.use("/api",userRoute)
// npm install ejs

// DATA
let userData = [
  {
    id: 1,
    name: "Ritika Soni",
    age: 19,
  },
  {
    id: 2,
    name: "vamika",
    age: 19,
  },
  {
    id: 3,
    name: "reshu",
    age: 20,
  },
];

// // GET USER PAGE
// app.get("/user", (req, res) => {
//   res.render("user", { userData });
// });

// app.get()
// //render index page
// app.get("/",(req,res)=>{
//   res.render("index")
// })

// ADD USER
// app.post("/api/user", (req, res) => {
//   const { name, age } = req.body;

//   let newUserData = {
//     id: userData.length + 1,
//     name,
//     age: Number(age),
//   };

//   userData.push(newUserData);

//   res.redirect("/user");
// });
// app.delete("/api/user/:id",(req,res)=>{
//     const userId = Number(req.params.id);
//     const userindex = userData.findIndex((ele)=>ele.id === userId);
//     if(userId == -1){
//         return res.send("user not found")
//     }
//     userData.splice(userindex,1);
//     res.redirect("/user")
// })
//get edit page
// app.get ("/editpage/:id",(req,res)=>{
//   const id = Number(req.params.id);
//   const user = userData.find((ele)=> ele.id === id);
//   if(!user){
//     return res.send("user not found");
//   }
//   res.render("edit", {user})
// })
//update route
// app.put("/api/user/:id",(req,res)=>{
//   const {name,age}=req.body;
//   const id = parseInt(req.params.id);
//   const userindex = userData.findIndex((ele)=> ele.id === id);
//   if(userindex==-1){
//     return res.send("user not found")
//   }
//   userData[userindex] = {id,name,age};
//   res.redirect('/user');

// })


app.listen(3000, () => {
  console.log("server is running on port 3000");
});
