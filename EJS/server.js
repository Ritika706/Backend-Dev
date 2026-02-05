import express from "express";
const app = express();

app.set("view engine", "ejs");

// middleware mae url mae output aayega form m submit krne se toh use object m convert krega yeh
app.use(express.urlencoded({ extended: true }));

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

// GET USER PAGE
app.get("/user", (req, res) => {
  res.render("user", { userData });
});

// ADD USER
app.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  let newUserData = {
    id: userData.length + 1,
    name,
    age: Number(age),
  };

  userData.push(newUserData);

  res.redirect("/user");
});
app.get("/api/user/:id",(req,res)=>{
    const userId = Number(req.params.id);
    const userindex = userData.findIndex((ele)=>ele.id === userId);
    if(userId == -1){
        return res.send("user not found")
    }
    userData.splice(userindex,1);
    res.redirect("/user")
})

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
