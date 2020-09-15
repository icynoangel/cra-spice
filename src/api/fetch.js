import {attemptRequest} from 'redux-requests';
import {PENDING, SUCCESS, ERROR} from '../constants/status';

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

const createAction = (type, url, options) => {
  const { requestId, payload, ...rest } = options;

  const request = new Promise((resolve, reject) => {
    fetch(url, rest)
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
          type: `${type}_${PENDING}`,
          payload
        }),
        success: (response) => ({
          type: `${type}_${SUCCESS}`,
          response,
          payload
        }),
        failure: (error) => {
          return {
            type: `${type}_${ERROR}`,
            error,
            payload
          };
        }
      },
      makeRequest,
      dispatch
    );
    return request;
  };
};

export default createAction;
