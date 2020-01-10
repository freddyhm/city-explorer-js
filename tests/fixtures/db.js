const mongoose = require('mongoose');
const app = require('../../src/app');
const Activity = mongoose.model('Activity');
const ActivityType = mongoose.model('ActivityType');
const Place = mongoose.model('Place');

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

const activityTypeOneId = new mongoose.Types.ObjectId();
const activityTypeOne = {
    _id: activityTypeOneId,
    name: 'poutine',
    activity: activityOne._id
};

const activityTypeTwoId = new mongoose.Types.ObjectId();
const activityTypeTwo = {
    _id: activityTypeTwoId,
    name: 'dive bars',
    activity: activityTwo._id
};

const placeOne = {
    name: 'poutineville',
    activityType: activityTypeOne._id
};

const placeTwo = {
    name: 'rockette',
    activityType: activityTypeTwo._id
};

const setupDatabase = async () => {
    await ActivityType.deleteMany({});
    await Activity.deleteMany({});
    await Place.deleteMany({});

    await new Activity(activityOne).save();
    await new Activity(activityTwo).save();

    await new ActivityType(activityTypeOne).save();

    await new Place(placeOne).save();
    await new Place(placeTwo).save();
};

module.exports = {
    activityOne,
    activityTwo,
    activityTypeOne,
    activityTypeTwo,
    placeOne,
    placeTwo,
    setupDatabase
};