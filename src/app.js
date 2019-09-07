const express = require('express');
const placeRouter = require('./routers/place');

const app = express();

app.use(placeRouter);

module.exports = app;