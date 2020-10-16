const express = require('express');
const dataStore = require('./config/db');

createCollection = async (dbName, collName) => {
    const { defaultDB, client } = await dataStore.connect();

    db = client.db(dbName);
    const coll = db.collection(collName);

    await coll.insertMany([
        {"name": "Rama","age": 35, "city": "Irving"},
        {"name": "Beam","age": 34, "city": "NJ"},
        {"name": "adel","age": 21, "city": "Dalls"}
    ]);
}

 
createCollection("people", "students");


const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

