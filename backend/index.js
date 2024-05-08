const express = require("express");
const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

require('dotenv').config();
const Project = require('./Project')
app.get('/projects',async(req,res)=>{
    try{
        const projects = await Project.find();
        res.json(projects);
    }
    catch (err){
        res.status(500).json({message:err.message})
    }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
