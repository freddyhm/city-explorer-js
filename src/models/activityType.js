const mongoose = require('mongoose');

const activityTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    }
});

const ActivityType = mongoose.model('ActivityType', activityTypeSchema);

module.exports = ActivityType;