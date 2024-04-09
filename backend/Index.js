const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const route = require('./api/routes/Route.js') ;
const routes =  require ('./api/routes/Auth.js');
const path = require('path')


dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("connected to mongodb");
}).catch((error)=>{
    console.log(error)
})

const app = express()
app.use(cors())
app.use(express.json())
app.listen("8000",()=>{
    console.log("port connected")
})
app.use("/project",route)
app.use("/admin",routes)

// deplpyment

const __dirname1 = path.resolve();

if("production" === "production"){
    app.use(express.static(path.join(__dirname1,"/Portfolio_website")));
     
    app.get("*",(req,res)=>
     res.sendFile(path.resolve(__dirname1,"Portfolio_website","dist","index.html"))
   
  
)

}else{
    app.get("/",(req,res)=>{
        res.send("api is running..")
    })
}