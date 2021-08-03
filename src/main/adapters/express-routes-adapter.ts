import { Request, Response } from 'express';
import { Controller } from '../../presentation/contracts/controller';
import { HttpRequest, HttpResponse } from '../../presentation/contracts/http';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse: HttpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
