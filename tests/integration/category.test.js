const request = require('supertest');
const app = require('../../src/app');
const should = require('chai').should();

const {
    setupDatabase
} = require ('../fixtures/db');

describe('get categories', () => {
    //
    // beforeEach(setupDatabase);
    //
    // it("Should return all places for an associated category", async () => {
    //     const response = await request(app)
    //         .get('categories/poutine');
    //
    //     response.body.length.should.be.equal(1);
    //     response.body[0].name.should.be.equal('poutineville');
    // });
});