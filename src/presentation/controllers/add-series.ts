import { Controller } from '../contracts/controller';
import { HttpRequest, HttpResponse } from '../contracts/http';
import { MissingParamError } from '../errors/missing-param-error';
import { InvalidParamError } from '../errors/invalid-param-error';

import { badRequest } from '../helpers/http';
import { AddSeries } from '../../domain/usecases/add-series';

export class AddSeriesController implements Controller {
  constructor(private readonly addSeries: AddSeries) {}

  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'description', 'score'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { name, description, score } = httpRequest.body;

    if (typeof score !== 'number') {
      return badRequest(new InvalidParamError('score'));
    }

    const resultSeries = this.addSeries.add({
      name,
      description,
      score,
    });

    return {
      statusCode: 200,
      body: {},
    };
  }
}
