export const seriesSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
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
