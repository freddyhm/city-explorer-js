const request = require('supertest');
const app = require('../src/app');
const Activity = require('../src/models/activity');

beforeAll(async () => {
    await Activity.collection.drop();

    const eatingActivity = new Activity({ name: 'eating'});
    await eatingActivity.save();

    const partyingActivity = new Activity({ name: 'partying'});
    await partyingActivity.save();
});

describe('get activities', () => {
    it("returns one or more activities", async () => {
        const response = await request(app)
            .get('/activities/')
            .expect(200);

        expect(response.body.length).toBeGreaterThan(0);
    });
});

