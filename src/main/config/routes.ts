import { Express, Router } from 'express';
import { readdirSync } from 'fs';

export default (app: Express): void => {
  const router = Router();
  app.use('/', router);
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (
      !file.endsWith('.map') &&
      !file.endsWith('.test.js') &&
      !file.endsWith('.test.ts')
    ) {
      (await import(`../routes/${file}`)).default(router);
    }
  });
};
