// const mongoose = require('mongoose');
const mongo = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

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

const MongoClient = mongo.MongoClient;
const url = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;


// connect to mongo db using mongoose
/* mongooseClient = function () {
    mongoose.connect(url, options).
        then(function () {
            console.log(`Mongodb connected!!!`);
        }).
        catch(function (err) {
            console.log(err);
        });
} */


var client = null;
connect = async function () {
    if (!client) {
        client = await MongoClient.connect(url, options);
    }

    return {
        db: client.db(process.env.MONGO_DBNAME),
        client: client,
    };
}



module.exports = {
    // mongooseClient,
    connect,
}

