const express = require('express');
const router = new express.Router();
const activityController = require('../controllers/activityController');
const Activity = require('../models/activity');

router.get('/activities', activityController(Activity).get);

module.exports = router;