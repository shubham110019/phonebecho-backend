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
        brandname: req.body.brandname,
            modelname: req.body.modelname,
            image: req.body.image,
            pageurl: req.body.pageurl,
            series: req.body.series,
            display: req.body.display,
            displayglass: req.body.displayglass,
            frontcamera: req.body.frontcamera,
            backcamera: req.body.backcamera,
            volumebutton: req.body.volumebutton,
            fingertouch: req.body.fingertouch,
            wifi: req.body.wifi,
            battery: req.body.battery,
            speaker: req.body.speaker,
            powerbutton: req.body.powerbutton,
            chargingport: req.body.chargingport,
            facesensor: req.body.facesensor,
            silentbutton: req.body.silentbutton,
            audioreceiver: req.body.audioreceiver,
            cameraglass: req.body.cameraglass,
            bluetooth: req.body.bluetooth,
            vibrator: req.body.vibrator,
            microphone: req.body.microphone,
            proximitysensor: req.body.proximitysensor,
            audiojack: req.body.audiojack,
            box: req.body.box,
            originalcharger: req.body.originalcharger,
            bill3: req.body.bill3,
            bill3to6: req.body.bill3to6,
            bill6to11: req.body.bill6to11,
            bill11out: req.body.bill11out,
            conditiongood: req.body.conditiongood,
            conditionbelow: req.body.conditionbelow,
            conditionpoor: req.body.conditionpoor,
            variant : req.body.variant
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
            brandname: req.body.brandname,
            modelname: req.body.modelname,
            image: req.body.image,
            pageurl: req.body.pageurl,
            series: req.body.series,
            display: req.body.display,
            displayglass: req.body.displayglass,
            frontcamera: req.body.frontcamera,
            backcamera: req.body.backcamera,
            volumebutton: req.body.volumebutton,
            fingertouch: req.body.fingertouch,
            wifi: req.body.wifi,
            battery: req.body.battery,
            speaker: req.body.speaker,
            powerbutton: req.body.powerbutton,
            chargingport: req.body.chargingport,
            facesensor: req.body.facesensor,
            silentbutton: req.body.silentbutton,
            audioreceiver: req.body.audioreceiver,
            cameraglass: req.body.cameraglass,
            bluetooth: req.body.bluetooth,
            vibrator: req.body.vibrator,
            microphone: req.body.microphone,
            proximitysensor: req.body.proximitysensor,
            audiojack: req.body.audiojack,
            box: req.body.box,
            originalcharger: req.body.originalcharger,
            bill3: req.body.bill3,
            bill3to6: req.body.bill3to6,
            bill6to11: req.body.bill6to11,
            bill11out: req.body.bill11out,
            conditiongood: req.body.conditiongood,
            conditionbelow: req.body.conditionbelow,
            conditionpoor: req.body.conditionpoor,
            variant : req.body.variant
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