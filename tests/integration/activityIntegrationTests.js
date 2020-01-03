const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose')
const Activity = mongoose.model('Activity');
const ActivityType = mongoose.model('ActivityType');

const should = require('chai').should();

describe('get activities', () => {

    beforeEach(async () => {
        await ActivityType.deleteMany({});
        await Activity.deleteMany({});
    });

    it("Should return all activities", async () => {

        // Arrange
        const eatingActivity = new Activity({name: 'eating'});
        const partyingActivity = new Activity({name: 'partying'});

        await eatingActivity.save();
        await partyingActivity.save();

        // Act
        const response = await request(app)
            .get('/activities/');

        // Assert
        response.body.length.should.be.equal(2);
        response.body[0].name.should.be.equal('eating');
        response.body[1].name.should.be.equal('partying');
    });

    it("Should return all activity types associated with activity", async () => {

        // Arrange
        const eatingActivity = new Activity({name: 'eating'});
        await eatingActivity.save();

        const poutineType = new ActivityType({name: 'poutine', activity: eatingActivity.name});
        await poutineType.save();

        // Act
        const response = await request(app)
            .get('/activity/' + eatingActivity.name);

        // Assert
        response.body.length.should.be.equal(1);
        response.body[0].name.should.be.equal('poutine');
     });

    afterEach(async () => {
        await ActivityType.deleteMany();
        await Activity.deleteMany();
    });

});

