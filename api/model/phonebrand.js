const mongoose = require('mongoose');

const phoneBrandSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    brand:String,
    image:String,
    brandId:Number
},{ timestamps: true }
)

module.exports = mongoose.model('PhoneBrand',phoneBrandSchema);
