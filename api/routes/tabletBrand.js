const express = require('express');
const router = express.Router();
const TabletBrand = require('../model/tablet/tabletbrand');
const TabletModel = require('../model/tablet/tabletmodel');
const mongoose = require('mongoose');


//get TabletBrand
router.get('/',(req,res,next)=>{
    TabletBrand.find().limit(req.query.limit).then(result=>{
        res.status(200).json({
            data:result
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
})

// find by id TabletBrand
router.get('/:id',(req,res,next)=>{
    TabletBrand.findById(req.params.id).then(result=>{
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

// find by brand name
router.get('/brand/:brand',(req,res,next)=>{
    TabletModel.find({brandname:req.params.brand}).then(result=>{
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



// post TabletBrand
router.post('/',(req,res,next)=>{
    const tabletBrand = new TabletBrand({
        _id: new mongoose.Types.ObjectId,
        brand:req.body.brand,
        image:req.body.image,
        brandId:req.body.brandId
    })
    tabletBrand.save().then(result=>{
        console.log(result);
        res.status(200).json({
            newTabletBrand:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })

    })
})

// delete by id TabletBrand
router.delete('/:id',(req,res,next)=>{
    TabletBrand.remove({_id:req.params.id}).then(result=>{
        res.status(200).json({
            message:'tablet brand delete',
            result:result
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

// put by id TabletBrand
router.put('/:id',(req,res,next)=>{
    TabletBrand.findOneAndUpdate({_id:req.params.id},{
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