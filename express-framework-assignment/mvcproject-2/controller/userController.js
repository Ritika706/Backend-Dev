import {userData} from '../model/data.js';

export const alluser = ((req,res)=>{

    res.json({
        message:"All users retrieved successfully",
        userData   
    })
});
export const createUser=({req,res})=>{
    const{name,email}=req.body;
    let newUser={
        id:userData.length+1,
        name:name,
        email:email}
        userData.push(newUser);
        res.json({
            message:"User created successfully",
        });
}

export const deleteUser=({req,res})=>{
    try{
        const id=req.params.id;
    let userIndex=userData.findIndex((ele)=ele.id==id);
    if(userIndex==-1){
        return res.json({
            message:"user not found"
        });
    }
    userData.splice(userIndex,1);
    res.json({message:"user deleted"});

    }catch(err){
        res.json({
            message:err
        })
    }
    
    
}
//frontend(react)->route->controller->model->controller->view
//restful api h y ejs ka use nhi kre isiliye view nhi h folder 











