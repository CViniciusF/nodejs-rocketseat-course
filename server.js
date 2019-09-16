const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//creates an instance from express, initializes app
const app = express();

//allow sending data in JSON
app.use(express.json());

//allow cors
app.use(cors);

//connects to database, user and password needs to be informed in url if we set password on db configs.
const mongodbConnectionString = "mongodb://localhost:27017/nodeapi";
mongoose.connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //find and update/delete without this options is deprecated
    useFindAndModify: true
});

//the model has to be required after connection initialization
requireDir('./src/models');

//when server receives an request from /api we will use routes file.
// 'use' means it doesn't depends on verb it accepts get post patch... .
app.use('/api', require("./src/routes"));

//creates a server in port passed by parameter
app.listen(3004);