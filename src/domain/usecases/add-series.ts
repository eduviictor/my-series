import { SeriesModel } from '../models/series';

export interface AddSeriesModel {
  name: string;
  description: string;
  score: number;
}

export interface AddSeries {
  add(series: AddSeriesModel): Promise<SeriesModel>;
}
