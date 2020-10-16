import { connect } from 'mongoose';

const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_PORT
} = process.env;


const options = {
    useNewUrlParser: true,
    reconnectTries: 10,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
}

const url = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/?authSource=admin`;

connect(url, options).
    then(() => {
        console.log('MongoDB is connected!!!');
    }).
    catch((err) => {
        console.log(err);
    })