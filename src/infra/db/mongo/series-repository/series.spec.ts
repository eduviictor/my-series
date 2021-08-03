import { MongoHelper } from '../helpers/mongo-helper';
import { SeriesMongoRepository } from './series';

describe('Series Mongo Repository', () => {
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

  const makeSut = (): SeriesMongoRepository => {
    return new SeriesMongoRepository();
  };

  test('Should return an series with success', async () => {
    const sut = makeSut();
    const series = await sut.add({
      name: 'any_name',
      description: 'any_description',
      score: 10,
    });

    expect(series).toBeTruthy();
    expect(series.id).toBeTruthy();
    expect(series.name).toBe('any_name');
    expect(series.description).toBe('any_description');
    expect(series.score).toBe(10);
  });
});
