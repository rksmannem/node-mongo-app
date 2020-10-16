const mongoose = require('mongoose');

const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_PORT
} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;

// console.log("uri:", url)

client = function () {
    mongoose.connect(url, options).
        then(function () {
            console.log(`Mongodb connected!!!`);
        }).
        catch(function (err) {
            console.log(err);
        });
}

module.exports = {
    client,
}

