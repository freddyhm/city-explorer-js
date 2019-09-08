const path = require('path');
const express = require('express');
const placeRouter = require('./routers/place');
require('./db/mongoose');
const app = express();

app.use(placeRouter);

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

const Place = require('./models/place');
const poutinePlace = new Place({ name: 'Poutineville', activity: 'eating'});
poutinePlace.save();

module.exports = app;