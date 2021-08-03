import { SeriesModel } from '../../domain/models/series';
import { AddSeriesModel } from '../../domain/usecases/add-series';

export interface AddSeriesRepository {
  add(seriesData: AddSeriesModel): Promise<SeriesModel>;
}
