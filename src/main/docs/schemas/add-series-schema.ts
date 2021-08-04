export const addSeriesParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    score: {
      type: 'number',
    },
  },
  required: ['id', 'name', 'description', 'score'],
};
