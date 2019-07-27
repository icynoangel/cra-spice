
const getToken = () => {
  return localStorage.getItem('portfolio-token');
}

const httpConfig = {
  mode: 'cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Token': getToken()
  }
};

const http = {
  get: () => ({
    method: 'GET',
    ...httpConfig
  }),
  post: (payload) => ({
    method: 'POST',
    ...httpConfig,
    body: JSON.stringify(payload)
  }),
  put: (payload) => ({
    method: 'PUT',
    ...httpConfig,
    body: JSON.stringify(payload)
  }),
  delete: () => ({
    method: 'DELETE',
    ...httpConfig
  })
};

export default http;