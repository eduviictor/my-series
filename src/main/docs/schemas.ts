import { addSeriesParamsSchema } from './schemas/add-series-schema';
import { errorSchema } from './schemas/error-schema';
import { seriesSchema } from './schemas/series-schema';

export default {
  series: seriesSchema,
  addSeriesParams: addSeriesParamsSchema,
  error: errorSchema,
};
