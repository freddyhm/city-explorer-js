const request = require('supertest');
const app = require('../src/app');
const Place = require('../src/models/place');

beforeAll(async () => {
    await Place.collection.drop();
    const poutinePlace = new Place({ name: 'Poutineville', activity: 'eating'});
    await poutinePlace.save();
});



describe('get places', () => {
    it("returns the place that is associated with the user's activity", async () => {

        const userActivity = 'eating';
        const response = await request(app)
            .get('/places/' + userActivity)
            .expect(200);

        expect(response.body.name).toBe('Poutineville');
    });

    it("returns an error message if no place is associated with the user's activity", async () => {

        const userActivity = 'running';
        const response = await request(app)
            .get('/places/' + userActivity);

        expect(response.status).toBe(404);
    });
});

