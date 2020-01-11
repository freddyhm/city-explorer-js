const express = require('express');
const router = new express.Router();
const Activity = require('../models/activity');
const Category = require('../models/category');

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

router.get('/activities/:activityName/categories/', async (req, res) => {
    try {
        const activity = await Activity.find({name: req.params.activityName});
        const categories = await Category.find({activity: activity[0]._id});

        if (!categories) {
            return res.status(404).send();
        }

        res.status(200).send(categories);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;