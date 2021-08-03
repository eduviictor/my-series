import { AddSeriesRepository } from '../../../../data/contracts/add-series-repository';
import { SeriesModel } from '../../../../domain/models/series';
import { AddSeriesModel } from '../../../../domain/usecases/add-series';
import { MongoHelper } from '../helpers/mongo-helper';

export class SeriesMongoRepository implements AddSeriesRepository {
  async add(seriesData: AddSeriesModel): Promise<SeriesModel> {
    const seriesCollection = MongoHelper.getCollection('series');
    const result = await (await seriesCollection).insertOne(seriesData);
    const seriesFinded = await (
      await seriesCollection
    ).findOne(result.insertedId);
    return MongoHelper.map(seriesFinded);
  }
}
