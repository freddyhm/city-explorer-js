const express = require('express');
const router = new express.Router();
const Activity = require('../models/activity');
const ActivityType = require('../models/activityType');

router.get('/activities', async (req, res) => {
    try {
        const activities = await Activity.find();

        if (!activities){
            return res.status(404).send();
        }

        res.status(200).send(activities);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/activity/:activityName', async (req, res) => {
    try {
        const activity = await Activity.find({name: req.params.activityName});
        const activityTypes = await ActivityType.find({activity: activity[0]._id});

        if (!activityTypes) {
            return res.status(404).send();
        }

        res.status(200).send(activityTypes);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;