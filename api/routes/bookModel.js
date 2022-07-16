const express = require('express');
const router = express.Router();
const bookModel = require('../model/bookmodel');
const mongoose = require('mongoose');


//get user booking
router.get('/',(req,res,next)=>{
    bookModel.find().limit(req.query.limit).sort({createdAt:-1}).then(result=>{
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


router.get('/?',(req,res,next)=>{
    bookModel.find().limit(1).then(result=>{
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

// find by user id 
router.get('/:id',(req,res,next)=>{
    bookModel.findById(req.params.id).then(result=>{
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

// post bookingphone
router.post('/',(req,res,next)=>{
    const bookmodel = new bookModel({
        _id: new mongoose.Types.ObjectId,
        fullname:req.body.fullname,
        email:req.body.email,
        phone:req.body.phone,
        pincode:req.body.pincode,
        city:req.body.city,
        address:req.body.address,
        pickupdate:req.body.pickupdate,
        modelnamefull:req.body.modelnamefull,
        phoneissues:req.body.phoneissues,
        phoneacessories:req.body.phoneacessories,
        phoneage:req.body.phoneage,
        phonecondition:req.body.phonecondition,
        pickupprice:req.body.pickupprice,
        bookingtype:req.body.bookingtype,
        bookingdate: new Date(),
    })
    bookmodel.save().then(result=>{
        console.log(result);
        res.status(200).json({
            data:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })

    })
})

// delete by id bookingphone
router.delete('/:id',(req,res,next)=>{
    bookModel.remove({_id:req.params.id}).then(result=>{
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



module.exports = router;