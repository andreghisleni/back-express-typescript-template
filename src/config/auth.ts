export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '10m',
    expiresInRefresh: '10d',
  },
};
