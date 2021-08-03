import { MissingParamError } from '../errors/missing-param-error';
import { AddSeriesController } from './add-series';

interface SutTypes {
  sut: AddSeriesController;
}

const makeSut = (): SutTypes => {
  const sut = new AddSeriesController();
  return {
    sut,
  };
};

describe('AddSeries Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {},
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('name'));
  });
});
