import { Router } from 'express';
import { adaptRoute } from '../adapters/express-routes-adapter';
import { makeAddSeriesController } from '../factories/add-series';

export default (router: Router): void => {
  router.post('/series', adaptRoute(makeAddSeriesController()));
};
