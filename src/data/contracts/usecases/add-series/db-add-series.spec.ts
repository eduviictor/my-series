import { SeriesModel } from '../../../../domain/models/series';
import { AddSeriesModel } from '../../../../domain/usecases/add-series';
import { AddSeriesRepository } from '../../add-series-repository';
import { DbAddSeries } from './db-add-series';

const makeAddSeriesRepository = (): AddSeriesRepository => {
  class AddSeriesRepositoryStub implements AddSeriesRepository {
    async add(seriesData: AddSeriesModel): Promise<SeriesModel> {
      const fakeSeries = {
        id: 'valid_id',
        name: 'valid_name',
        description: 'valid_description',
        score: 10,
      };
      return new Promise(resolve => resolve(fakeSeries));
    }
  }

  return new AddSeriesRepositoryStub();
};

interface SutTypes {
  sut: DbAddSeries;
  addSeriesRepositoryStub: AddSeriesRepository;
}

const makeSut = (): SutTypes => {
  const addSeriesRepositoryStub = makeAddSeriesRepository();
  const sut = new DbAddSeries(addSeriesRepositoryStub);
  return {
    sut,
    addSeriesRepositoryStub,
  };
};

describe('DbAddSeries Usecase', () => {
  test('Should call AddSeriesRepository with correct values', async () => {
    const { sut, addSeriesRepositoryStub } = makeSut();
    const addSpy = jest.spyOn(addSeriesRepositoryStub, 'add');

    const seriesData = {
      name: 'valid_name',
      description: 'valid_description',
      score: 10,
    };

    await sut.add(seriesData);

    expect(addSpy).toHaveBeenCalledWith({
      name: 'valid_name',
      description: 'valid_description',
      score: 10,
    });
  });
});
