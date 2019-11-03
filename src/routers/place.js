const express = require('express');
const router = new express.Router();
const Place = require('../models/place');
// ok dude

router.get('/places/:activityName', async (req, res) => {

    try {
        const place = await Place.findOne({ activity: req.params.activityName});

        if (!place){
            return res.status(404).send();
        }

        res.status(200).send(place);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;