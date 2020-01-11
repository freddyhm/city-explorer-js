const request = require('supertest');
const app = require('../../src/app');
const should = require('chai').should();

const {
    activityOne,
    setupDatabase
} = require ('../fixtures/db');

describe('get activities', () => {

    beforeEach(setupDatabase);

    it("Should return all activities", async () => {
        const response = await request(app)
            .get('/activities/');

        response.body.length.should.be.equal(2);
        response.body[0].name.should.be.equal('eating');
        response.body[1].name.should.be.equal('partying');
    });

    it("Should return all categories associated with activity", async () => {
        const response = await request(app)
            .get('/activity/' + activityOne.name);

        response.body.length.should.be.equal(1);
        response.body[0].name.should.be.equal('poutine');
     });
});

// /activities/eating/categories/poutine/places/banquise
