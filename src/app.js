const path = require('path');
const express = require('express');
const placeRouter = require('./routers/place');
const activityRouter = require('./routers/activity');
require('./db/mongoose');
const app = express();

app.use(placeRouter);
app.use(activityRouter);

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

module.exports = app;