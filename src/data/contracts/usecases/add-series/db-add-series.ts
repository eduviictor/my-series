import { SeriesModel } from '../../../../domain/models/series';
import {
  AddSeries,
  AddSeriesModel,
} from '../../../../domain/usecases/add-series';
import { AddSeriesRepository } from '../../add-series-repository';

export class DbAddSeries implements AddSeries {
  constructor(private readonly addSeriesRepository: AddSeriesRepository) {}

  async add(seriesData: AddSeriesModel): Promise<SeriesModel> {
    const series = await this.addSeriesRepository.add(seriesData);
    return series;
  }
}
