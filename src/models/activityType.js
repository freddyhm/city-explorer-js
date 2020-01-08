const mongoose = require('mongoose');

const activityTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Activity'
    }
});

const ActivityType = mongoose.model('ActivityType', activityTypeSchema);

module.exports = ActivityType;