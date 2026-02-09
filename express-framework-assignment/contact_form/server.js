import express from "express";
const app=express();

//html data lene k liye
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs')//ejs ko use krne k liye
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.post('/contact',(req,res)=>{
    const{name,email,contact}=req.body
    console.log('name:',name);
    console.log('email:',email);
    console.log('contact:',contact);
    res.send("form submitted!!");

})
app.listen(3000,()=>{
    console.log("server is running");
})
