const express = require('express');
const router = new express.Router();
const Place = require('../models/place');
const ActivityType = require('../models/activityType');

router.get('/places/', async (req, res) => {
    try {
        const places = await Place.find();

        if (!places) {
            return res.status(404).send();
        }

        res.status(200).send(places);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/places/:activityType', async (req, res) => {
    try {

        const activityType = await ActivityType.find({name: req.params.activityType});
        const places = await Place.find({activityType: activityType[0]._id});

        if (!places) {
            return res.status(404).send();
        }

        res.status(200).send(places);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;