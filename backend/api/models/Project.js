const mongoose = require ("mongoose");

const Project = new mongoose.Schema({
    name:{type:String},
    prjct:{type:String},
    description:{type:String},
    Backend:[{
        type:String
    }],
    Frontend:[{
        type:String
    }],
    Database:[{
        type:String
    }],
    Payment:[{
        type:String
    }],
    DevelopmentTools:[{
        type:String
    }],
    VersionControl:[{
        type:String
    }],
    Deployment:[{
        type:String
    }],
},{timestamps:true})
const project = mongoose.model("Project",Project)

module.exports = project;
