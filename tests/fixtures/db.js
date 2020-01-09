const mongoose = require('mongoose');
const app = require('../../src/app');
const Activity = mongoose.model('Activity');
const ActivityType = mongoose.model('ActivityType');

const activityOneId = new mongoose.Types.ObjectId();
const activityOne = {
    _id: activityOneId,
    name: 'eating'
};

const activityTwoId = new mongoose.Types.ObjectId();
const activityTwo = {
    _id: activityTwoId,
    name: 'partying'
};

const activityTypeOne = {
    name: 'poutine',
    activity: activityOne._id
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