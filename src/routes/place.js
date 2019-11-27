const express = require('express');
const router = new express.Router();
const placeController = require('../controllers/placeController');
const Place = require('../models/place');

router.get('/places/:activityName', placeController(Place).get);

module.exports = router;