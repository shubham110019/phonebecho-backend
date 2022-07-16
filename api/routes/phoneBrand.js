const express = require('express');
const router = express.Router();
const PhoneBrand = require('../model/phonebrand');
const PhoneModel = require('../model/phonemodel');
const mongoose = require('mongoose');


//get phonebrand
router.get('/',(req,res,next)=>{
    PhoneBrand.find().limit(req.query.limit).then(result=>{
        res.status(200).json({
            brandapi:result
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

// find by id phonebrand
router.get('/:id',(req,res,next)=>{
    PhoneBrand.findById(req.params.id).then(result=>{
        res.status(200).json({
            PhoneBrandData:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

// find by brand name
router.get('/brand/:brand',(req,res,next)=>{
    PhoneModel.find({brandname:req.params.brand}).then(result=>{
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



// post phonebrand
router.post('/',(req,res,next)=>{
    const phonebrand = new PhoneBrand({
        _id: new mongoose.Types.ObjectId,
        brand:req.body.brand,
        image:req.body.image,
        brandId:req.body.brandId
    })
    phonebrand.save().then(result=>{
        console.log(result);
        res.status(200).json({
            newPhoneBrand:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })

    })
})

// delete by id phonebrand
router.delete('/:id',(req,res,next)=>{
    PhoneBrand.remove({_id:req.params.id}).then(result=>{
        res.status(200).json({
            message:'phone brand delete',
            result:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// put by id phonebrand
router.put('/:id',(req,res,next)=>{
    PhoneBrand.findOneAndUpdate({_id:req.params.id},{
        $set:{
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

module.exports = router;