import { DbAddSeries } from '../../data/usecases/add-series/db-add-series';
import { SeriesMongoRepository } from '../../infra/db/mongo/series-repository/series';
import { AddSeriesController } from '../../presentation/controllers/add-series';

export const makeAddSeriesController = (): AddSeriesController => {
  const seriesMongoRepository = new SeriesMongoRepository();
  const dbAddSeries = new DbAddSeries(seriesMongoRepository);
  return new AddSeriesController(dbAddSeries);
};
