const express = require('express');
const path = require('path');
require('./db/mongoose');

const app = express();

const placeRouter = require('./routes/place');
const activityRouter = require('./routes/activity');
const activityType = require('./models/activityType');

app.use(placeRouter);
app.use(activityRouter);
app.use(activityType);

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

module.exports = app;