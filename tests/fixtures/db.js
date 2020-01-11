const mongoose = require('mongoose');
const app = require('../../src/app');
const Activity = mongoose.model('Activity');
const Category = mongoose.model('Category');
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

const categoryOneId = new mongoose.Types.ObjectId();
const categoryOne = {
    _id: categoryOneId,
    name: 'poutine',
    activity: activityOne._id
};

const categoryTwoId = new mongoose.Types.ObjectId();
const categoryTwo = {
    _id: categoryTwoId,
    name: 'italian',
    activity: activityOne._id
};

const categoryThreeId = new mongoose.Types.ObjectId();
const categoryThree = {
    _id: categoryThreeId,
    name: 'dive-bars',
    activity: activityTwo._id
};

const placeOne = {
    name: 'Poutineville',
    category: categoryOne._id
};

const placeTwo = {
    name: 'Pizzeria Dei Compari',
    category: categoryTwo._id
};

const placeThree = {
    name: 'Rockette',
    category: categoryThree._id
};

const setupDatabase = async () => {
    await Category.deleteMany({});
    await Activity.deleteMany({});
    await Place.deleteMany({});

    await new Activity(activityOne).save();
    await new Activity(activityTwo).save();

    await new Category(categoryOne).save();
    await new Category(categoryTwo).save();
    await new Category(categoryThree).save();

    await new Place(placeOne).save();
    await new Place(placeTwo).save();
    await new Place(placeThree).save();
};

module.exports = {
    activityOne,
    activityTwo,
    categoryOne,
    categoryTwo,
    placeOne,
    placeTwo,
    setupDatabase
};