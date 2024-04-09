const express = require ('express');
const project = require ('../models/Project.js');

const route = express.Router()

route.post("/create", async (req, res) => {
    try {
       const { name, description, prjct, Backend, Frontend, Database, Payment, DevelopmentTools, VersionControl, Deployment } = req.body;
       const backend = Backend.split(',').map(skill => skill.trim());
       const frontend = Frontend.split(',').map(skill => skill.trim());
       const database = Database.split(',').map(skill => skill.trim());
       const payment = Payment.split(',').map(skill => skill.trim());
       const developmentTools = DevelopmentTools.split(',').map(skill => skill.trim());
       const versionControl = VersionControl.split(',').map(skill => skill.trim());
       const deployment = Deployment.split(',').map(skill => skill.trim());
       
       const Project = new project({
          name,
          description,
          prjct,
          Backend: backend,
          Frontend: frontend,
          Database: database,
          Payment: payment,
          DevelopmentTools: developmentTools,
          VersionControl: versionControl,
          Deployment: deployment,
       });
 
       await Project.save();
       res.status(201).json({ message: "project listed" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Internal server error" });
    }
 });
 
route.get("/details",(req,res)=>{
    project.find()
    .then(products=>{
        return res.status(200).json({products})
    })
    .catch(error=>{
        console.error(error);
        return res.status(500).json({message:error})
    })
})
module.exports =  route