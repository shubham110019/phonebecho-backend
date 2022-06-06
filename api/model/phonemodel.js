const mongoose = require('mongoose');

const phoneModelSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    price:Number,
    brand:String,
    image:String,
    brandId:Number
})

module.exports = mongoose.model('PhoneModel',phoneModelSchema);