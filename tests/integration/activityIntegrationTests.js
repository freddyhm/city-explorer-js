const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose')
const Activity = mongoose.model('Activity');


//beforeAll(async () => {
    // await Activity.collection.drop();
    //
    // const eatingActivity = new Activity({ name: 'eating'});
    // await eatingActivity.save();
    //
    // const partyingActivity = new Activity({ name: 'partying'});
    // await partyingActivity.save();
//});
//
 describe('get activities', () => {

     it("returns one or more activities", async () => {

            const eatingActivity = new Activity({name: 'eating'});
            await eatingActivity.save();

            const response = await request(app)
                .get('/activities/');

            response.should.not.be.empty();
     });

     afterEach(() => {
         Activity.deleteMany({}).exec();
     });

 });

