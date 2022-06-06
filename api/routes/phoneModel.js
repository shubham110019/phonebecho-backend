const express = require('express');
const router = express.Router();
const PhoneModel = require('../model/phonemodel');
const mongoose = require('mongoose');


// get phone model
router.get('/',(req,res,next)=>{
    PhoneModel.find().then(result=>{
        res.status(200).json({
            phoneModel:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
    })
    })
})

// find by brand name
router.get('/tag/:brand',(req,res,next)=>{
    PhoneModel.find({brand:req.params.brand}).then(result=>{
        res.status(200).json({
            findBrand:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

//find by id name
router.get('/:id',(req,res,next)=>{
    PhoneModel.findById(req.params.id).then(result=>{
        res.status(200).json({
            data:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// post phone model
router.post('/',(req,res,next)=>{
    const phonemodel = new PhoneModel({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        price:req.body.price,
        brand:req.body.brand,
        image:req.body.image,
        brandId:req.body.brandId
    })
    phonemodel.save().then(result=>{
        res.status(200).json({
            newPhoneModel:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


// put phone model

router.put('/:id',(req,res,next)=>{
    PhoneModel.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            price:req.body.price,
            brand:req.body.brand,
            image:req.body.image,
            brandId:req.body.brandId
        }
    }).then(result=>{
        res.status(200).json({
            updatedBrand:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})



// delete phone model
router.delete('/:id',(req,res,next)=>{
    PhoneModel.remove({_id:req.params.id}).then(result=>{
        res.status(200).json({
            phoneModelDelete:result
        })
    }).catch(err=>{
        res.status(500).json({error:err})
    })
})


module.exports = router;