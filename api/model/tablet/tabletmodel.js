const mongoose = require('mongoose');

const tabletModelSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    brandname: { type: String },
    modelname: { type: String },
    image: { type: String },
    pageurl: { type: String },
    series: { type: String },
    display: { type: String },
    displayglass: { type: String },
    frontcamera: { type: String },
    backcamera: { type: String },
    volumebutton: { type: String },
    fingertouch: { type: String },
    wifi: { type: String },
    battery: { type: String },
    speaker: { type: String },
    powerbutton: { type: String },
    chargingport: { type: String },
    facesensor: { type: String },
    silentbutton: { type: String },
    audioreceiver: { type: String },
    cameraglass: { type: String },
    bluetooth: { type: String },
    vibrator: { type: String },
    microphone: { type: String },
    proximitysensor: { type: String },
    audiojack: { type: String },
    box: { type: String },
    originalcharger: { type: String },
    bill3: { type: String },
    bill3to6: { type: String },
    bill6to11: { type: String },
    bill11out: { type: String },
    conditiongood: { type: String },
    conditionbelow: { type: String },
    conditionpoor: { type: String },
    variant : [{
        phonedata: String,
        phoneurl: String,
        phoneprice: String,
    }]
},{ timestamps: true })

module.exports = mongoose.model('TabletModel',tabletModelSchema);