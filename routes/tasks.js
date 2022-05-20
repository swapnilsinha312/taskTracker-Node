const express =require('express');
const router=express.Router();
const Task= require('../models/task');


router.get("/",async(req,res)=>{
    try{
        console.log(`Get all tasks`);
        const tasks= await Task.find();
        res.send(tasks);
    }
    catch(error)
    {
        res.send(error);
    }
});


router.put("/:id",async(req,res)=>{
    
    try{
        console.log(`Put ${req.params.id}`);
        const task= await Task.findOneAndUpdate(
            // {_id:req.params.id},
            req.body
        );
        res.send(task);
    }
    catch(error)
    {
        res.send(error);
    }
});


router.post("/",async(req,res)=>{
    try{
        console.log(`Post ${req.body}`);
        // console.log(req.body);
        const task= await new Task(req.body).save();
        
        res.send(task);
    }
    catch(error)
    {
        res.send(error);
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        console.log(`Delete ${req.params.id}`);
        const task=await Task.findByIdAndDelete(req.params.id);
        req.send(task);
        // const tasks= await Task.find();
        // req.send(tasks);
    } 
    catch (error) {
        res.send(error);
    }

});

module.exports=router;