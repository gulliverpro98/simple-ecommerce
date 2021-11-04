const express = require('express');
const users = require('./routes/users');
const beers = require('./routes/beers');
const beersCart = require('./routes/carrello');
const env = require('dotenv');

const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000

const mongoose = require('mongoose');
const dbURL = require('./properties').DB_URL;

env.config();

mongoose.connect(dbURL);
mongoose.connection.on('connected', () => {

    console.log('Coonected to MongoDB using MongooseJS');
});

app.use(cors());
app.use(express.json());

app.use('/beers', beers);
app.use('/users', users);
app.use('/beersCart', beersCart);

app.listen(port, () => {
    console.log('Server is running on port 5000');
})