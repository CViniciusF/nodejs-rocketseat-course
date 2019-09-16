const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//creates an instance from express, initializes app
const app = express();

//connects to database, user and password needs to be informed in url if we set password on db configs.
const mongodbConnectionString = "mongodb://localhost:27017/nodeapi";
mongoose.connect(mongodbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//the model has to be required after connection initialization
requireDir('./src/models');

const Product = mongoose.model('Product');

//when user access '/' returns response inside function
app.get('/', (req, res) => {
    //response delivered by node server.
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send('Hello');
});

//creates a server in port passed by parameter
app.listen(3003);