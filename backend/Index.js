import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './api/routes/Route.js';
import routes from './api/routes/Auth.js';

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
