const express = require ('express');
const Admin = require ('../models/Admin.js') ;
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken')
const routes = express.Router()

routes.post("/signup",async(req,res)=>{
    try{
     const {name,email,password} = req.body;
     const hashedPassword = bcryptjs.hashSync(password,12)
     const admin = new Admin({
        name,
        email,
        password:hashedPassword
     })
     await admin.save().then(()=>{
        return (
            res.status(201).json({message:"Admin created successfully"})
        )
     })
    }catch(error){
        console.log(error)
    } 
})
routes.post("/signin",async(req,res,next)=>{
    try{
       const {email,password} = req.body;
       const validUser = await Admin.findOne({email})
       if(!validUser){
        return res.status(404).json({message:"User not found"})

       }
       const validPassword = bcryptjs.compareSync(password,validUser.password)
       if(!validPassword){
        return res.status(404).json({message:"password is wrong"})
       }
       const {password:hashedPassword,...rest} = validUser._doc;
      const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
      const age = new Date(Date.now() + 360000)
     res.cookie('access_token',token,{httpOnly:true,expires:age}).status(201).json(rest)
    }catch(error){
        nextImageLoaderRegex(error)
    }
})
module.exports = routes;