import logger from './logger';

const getMiddlewares = () => {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  return middlewares;
};

export default getMiddlewares;
