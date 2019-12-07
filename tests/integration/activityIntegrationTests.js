const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose')
const Activity = mongoose.model('Activity');
const should = require('chai').should();

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

     it("returns all activities", async () => {

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

     it("returns all places for an activity", async () => {

     });

     afterEach(() => {
         Activity.deleteMany({}).exec();
     });

 });

