import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'Series Crud API',
    description: 'Documentation of a simple series crud.',
    version: '1.0.0',
    contact: {
      name: 'Eduardo Victor',
      email: 'eduvictornobrega@gmail.com',
      url: 'https://www.linkedin.com/in/eduviictor',
    },
  },
  externalDocs: {
    description: 'Repository link',
    url: 'https://github.com/eduviictor/my-series',
  },
  servers: [
    {
      url: '/',
      description: 'Server',
    },
  ],
  tags: [
    {
      name: 'Series',
      description: 'Routes related to series',
    },
  ],
  paths,
  schemas,
  components,
};
