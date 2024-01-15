
const Data = require('../models/DataSchema');
const express = require('express');
const router = express.Router();
// Get Data from Database :

router.get('/get', async (req,res)=>{
   const data = await Data.find()
//    console.log(data);
      res.status(200).json(data);
})


// Post Data to Database :

router.post('/create', async (req,res)=>{
    const { name , email , password } = req.body 
    const newData = new Data({
        name , email , password 
    })
    await newData.save()
    console.log(`created successfully.`);
})

// Delete from Database :

router.delete('/delete/:id',async (req,res)=>{
   const {id} = req.params ;
//    console.log(id);
   await Data.findByIdAndDelete(id);
})

// Change from Database :

router.put('/change/:id',async(req,res)=>{
    const {id} = req.params ;
    const {name,email,password} = req.body ;
    console.log(id,name,email,password)
    await Data.findByIdAndUpdate({_id:id},{name,email,password});
})

module.exports =  router ;