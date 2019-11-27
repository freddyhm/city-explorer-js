const express = require('express');
const router = new express.Router();
const placeController = require('../controllers/placeController');
const Activity = require('../models/activity');

router.get('/activities', placeController(Activity).get);

module.exports = router;