const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const City = require('../model/city/citymodel');


router.get('/', (req, res, next) => {
    City.find().then(result => {
        res.status(200).json({
            data: result,
            
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err,
            
        })
    })
})

router.get('/:id', (req, res, next) => {
    City.findById(req.params.id).then(result => {
        res.status(200).json({
            data: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})


router.post('/', (req, res, next) => {
    const city = new City({
        _id: new mongoose.Types.ObjectId,
        city: req.body.city,
        image: req.body.image,
        pincode: req.body.pincode
    })
    city.save().then(result => {
        console.log(result);
        res.status(200).json({
            data: result,
            message: 'data submitted successfully'
        })
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: 'data Not submitted'
            })

        })
})


// delete by id 
router.delete('/:id',(req,res,next)=>{
    City.remove({_id:req.params.id}).then(result=>{
        res.status(200).json({
            message:'city delete',
            result:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})


// put by id 
router.put('/:id',(req,res,next)=>{
    City.findOneAndUpdate({_id:req.params.id},{
        $set:{
            city: req.body.city,
            image: req.body.image,
            pincode: req.body.pincode
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