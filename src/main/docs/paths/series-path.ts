export const seriesPath = {
  post: {
    tags: ['Series'],
    summary: 'Route for insert an series',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSeriesParams',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/series',
            },
          },
        },
      },
      400: {
        $ref: '#/components/badRequest',
      },
      404: {
        $ref: '#/components/notFound',
      },
      500: {
        $ref: '#/components/serverError',
      },
    },
  },
};
