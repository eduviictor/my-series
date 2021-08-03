import request from 'supertest';
import { MongoHelper } from '../../infra/db/mongo/helpers/mongo-helper';
import app from '../config/app';

describe('Series Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL || '');
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const seriesCollection = await MongoHelper.getCollection('series');
    await seriesCollection.deleteMany({});
  });

  test('Should return an series with success', async () => {
    await request(app)
      .post('/series')
      .send({
        name: 'The Boys',
        description: 'This is a description of The Boys.',
        score: 5,
      })
      .expect(200);
  });
});
