const request = require('supertest');
const mongoose = require('mongoose');
const connectionURL = 'mongodb://127.0.0.1:27017/city-explorer-js-test';
const app = require('../src/app');
const Place = require('../src/models/place');

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

beforeAll(async () => {
    await Place.collection.drop();
    const poutinePlace = new Place({ name: 'Poutineville', activity: 'eating'});
    await poutinePlace.save();
});

describe('get places', () => {
    it("should return the place that is associated with the user's activity", async () => {

        const userActivity = 'eating';
        const response = await request(app)
            .get('/places/' + userActivity)
            .expect(200);

        expect(response.body.name).toBe('Poutineville');
    });

    it("should return an error message if no place is associated with the user's activity", async () => {

        const userActivity = 'running';
        const response = await request(app)
            .get('/places/' + userActivity)
            .expect(404);

        expect(response.text).toBe('Could not find place!');
    });
});




