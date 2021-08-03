import { Controller } from '../contracts/controller';
import { HttpRequest, HttpResponse } from '../contracts/http';
import { MissingParamError } from '../errors/missing-param-error';
import { InvalidParamError } from '../errors/invalid-param-error';

import { badRequest } from '../helpers/http';

export class AddSeriesController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'description', 'score'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    const { score } = httpRequest.body;

    if (typeof score !== 'number') {
      return badRequest(new InvalidParamError('score'));
    }

    return {
      statusCode: 200,
      body: {},
    };
  }
}
