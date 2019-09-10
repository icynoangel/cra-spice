import {attemptRequest} from 'redux-requests';

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.error = response;
  throw error;
};

const parseJSON = (response) => {
  let json;

  if (response.status === 204) {
    // no content
    return response.blob();
  }

  try {
    json = response.json();
  } catch (e) {
    throw new Error(e);
  }
  return json;
};

const createAction = (type, url, payload) => {
  const {requestId} = payload;

  const request = new Promise((resolve, reject) => {
    fetch(url, payload)
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => {
        resolve(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

  const makeRequest = () => request;

  return (dispatch) => {
    attemptRequest(
      requestId || url,
      {
        begin: () => ({
          type: `${type}_PENDING`,
          payload
        }),
        success: (response) => ({
          type: `${type}_SUCCESS`,
          response,
          payload
        }),
        failure: (error) => ({
          type: `${type}_ERROR`,
          error,
          payload
        })
      },
      makeRequest,
      dispatch
    );
    return request;
  };
};

export default createAction;
