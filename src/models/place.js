const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activityType: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ActivityType'
    }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;