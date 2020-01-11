const express = require('express');
const router = new express.Router();
const Place = require('../models/place');
const Category = require('../models/category');

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

router.get('/places/:category', async (req, res) => {
    try {

        const category = await Category.find({name: req.params.category});
        const places = await Place.find({category: category[0]._id});

        if (!places) {
            return res.status(404).send();
        }

        res.status(200).send(places);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;