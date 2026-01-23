const express=require('express');
const app=express();
const user=require('./data.js');
app.get('/',(req,res)=>{
    res.send('home page');
})
app.get('/user/page',(req,res)=>{
    const page=req.query.page;
    const limit=req.query.limit;
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const pageData=user.slice(startIndex,endIndex);
    res.json({pageData})

})
app.listen(3000,()=>{
    console.log('server is running');
})