const express = require('express');
const db = require('./config/db');
const app = express();


// Database connection
mongoclient = db.client();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

