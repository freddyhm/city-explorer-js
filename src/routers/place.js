const express = require('express');
const router = new express.Router();
const Place = require('../models/place');

router.get('/places/:activityName', async (req, res) => {

    try {
        const place = await Place.findOne({ activity: req.params.activityName});

        if (!place){
            return res.status(404).send("Could not find place!");
        }

        res.status(200).send(place);
    } catch (e) {

    }
});

module.exports = router;