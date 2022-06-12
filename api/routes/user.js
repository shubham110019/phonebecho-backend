const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup',(req,res,next)=>{

    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err)
        {
            return res.status(500).json({
                error:err
            })
        }
        else{
            const user = new User({
                _id:new mongoose.Types.ObjectId,
                username:req.body.username,
                password:hash,
                email:req.body.email,
                phone:req.body.phone,
                userType:req.body.userType,
                image:req.body.image
            })
            user.save().then(result=>{
                console.log(result);
                res.status(200).json({
                    userdata:result
                })
            })
            .catch(err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        }
    })
})


router.post('/login',(req,res,next)=>{
    User.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1)
        {
            return res.status(401).json({
                mess:"User not found"
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result)
            {
                return res.status(401).json({
                    mess: "Passwords do not match.",
                })
            }
           if(result)
           {
                const token = jwt.sign({
                    username:user[0].username,
                    userType:user[0].userType,
                    email:user[0].email
                },
                'this is dummy text',
                {
                    expiresIn:"24h"
                }
                );
                res.status(200).json({
                    userId:user[0]._id,
                    username:user[0].username,
                    userType:user[0].userType,
                    email:user[0].email,
                    token:token
                })
           }
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


module.exports = router;
