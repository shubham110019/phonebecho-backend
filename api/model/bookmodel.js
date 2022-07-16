const mongoose = require('mongoose');

const bookModelSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullname:String,
    email:String,
    phone:Number,
    pincode:Number,
    city:String,
    address:String,
    pickupdate:String,
    modelnamefull:String,
    phoneissues:Array,
    phoneacessories:Array,
    phoneage:String,
    phonecondition:String,
    pickupprice:String,
    bookingtype:String,
    bookingdate:String,
})

module.exports = mongoose.model('BookModel',bookModelSchema);