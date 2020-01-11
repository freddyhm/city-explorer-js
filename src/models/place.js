const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;