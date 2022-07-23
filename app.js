const express = require('express');
const app = express();
const phoneRoute = require('./api/routes/phoneBrand');
const phoneModelRoute = require('./api/routes/phoneModel');
const userRoute = require('./api/routes/user');
const bookmodelRoute = require('./api/routes/bookModel');
const TabletRoute = require('./api/routes/tabletBrand');
const TabletModelRoute = require('./api/routes/tabletModel');

const CityRoute = require('./api/routes/city');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var cors = require('cors');


mongoose.connect('mongodb+srv://sralli73:UZHbvNH3FeDgcsOJ@phonebecho.hdwqk.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});

mongoose.connection.on('connected',connected=>{
    console.log('connection with database');
});

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/phone',phoneRoute);
app.use('/model',phoneModelRoute);
app.use('/phonebook',bookmodelRoute);
app.use('/tablet',TabletRoute)
app.use('/tabletmodel/',TabletModelRoute)

app.use('/user',userRoute);
app.use('/pickcity/',CityRoute)


module.exports = app;