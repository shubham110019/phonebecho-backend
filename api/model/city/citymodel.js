const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    city:String,
    image:String,
    pincode:String
},{ timestamps: true }
)

module.exports = mongoose.model('City',citySchema);