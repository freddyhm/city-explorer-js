const mongoose = require('mongoose')
const Activity = mongoose.model('Activity');
const ActivityType = mongoose.model('ActivityType');

const activityOne = {
    name: 'eating'
};

const activityTwo = {
    name: 'partying'
};

const activityTypeOne = {
    name: 'poutine',
    activity: activityOne.name
};

const setupDatabase = async () => {
    await ActivityType.deleteMany({});
    await Activity.deleteMany({});

    await new Activity(activityOne).save();
    await new Activity(activityTwo).save();
    await new ActivityType(activityTypeOne).save();
};

module.exports = {
    activityOne,
    activityTwo,
    activityTypeOne,
    setupDatabase
};