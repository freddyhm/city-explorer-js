const express = require('express');
const router = new express.Router();
const Activity = require('../models/activity');

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

module.exports = router;