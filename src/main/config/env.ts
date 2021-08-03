export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/my-series',
  port: process.env.PORT || 3000,
};
