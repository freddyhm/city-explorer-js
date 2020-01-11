const request = require('supertest');
const app = require('../../src/app');
const should = require('chai').should();

const {
    setupDatabase
} = require ('../fixtures/db');

describe('get places', () => {

    // beforeEach(setupDatabase);
    //
    // it("Should return all places", async () => {
    //     const response = await request(app)
    //         .get('/places/');
    //
    //     response.body.length.should.be.equal(2);
    //     response.body[0].name.should.be.equal('poutineville');
    //     response.body[1].name.should.be.equal('rockette');
    // });
    //
    // it("Should return place associated with activity type", async () => {
    //     const response = await request(app)
    //         .get('/places/poutine');
    //
    //     response.body.length.should.be.equal(1);
    //     response.body[0].name.should.be.equal('poutineville');
    // });
});