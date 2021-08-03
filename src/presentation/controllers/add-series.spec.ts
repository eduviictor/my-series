import { SeriesModel } from '../../domain/models/series';
import { AddSeries, AddSeriesModel } from '../../domain/usecases/add-series';
import { InvalidParamError } from '../errors/invalid-param-error';
import { MissingParamError } from '../errors/missing-param-error';
import { AddSeriesController } from './add-series';

const makeAddSeries = (): AddSeries => {
  class AddSeriesStub implements AddSeries {
    async add(series: AddSeriesModel): Promise<SeriesModel> {
      const fakeSeries = {
        id: 'valid_id',
        name: 'valid_name',
        description: 'valid_description',
        score: 10,
      };

      return new Promise(resolve => resolve(fakeSeries));
    }
  }
  return new AddSeriesStub();
};

interface SutTypes {
  sut: AddSeriesController;
  addSeriesStub: AddSeries;
}

const makeSut = (): SutTypes => {
  const addSeriesStub = makeAddSeries();
  const sut = new AddSeriesController(addSeriesStub);
  return {
    sut,
    addSeriesStub,
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

  test('Should return 400 if no description is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('description'));
  });

  test('Should return 400 if no score is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        description: 'any_description',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError('score'));
  });

  test('Should return 400 if score is not integer', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        name: 'any_name',
        description: 'any_description',
        score: 'score_string',
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new InvalidParamError('score'));
  });

  test('Should call AddSeries with correct values', async () => {
    const { sut, addSeriesStub } = makeSut();
    const addSpy = jest.spyOn(addSeriesStub, 'add');
    const httpRequest = {
      body: {
        name: 'any_name',
        description: 'any_description',
        score: 10,
      },
    };
    await sut.handle(httpRequest);
    expect(addSpy).toHaveBeenCalledWith({
      name: 'any_name',
      description: 'any_description',
      score: 10,
    });
  });
});
