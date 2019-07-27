import { attemptRequest } from 'redux-requests';

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(response);
}

const parseJSON = (response) => {
  let json;
  try {
    json = response.json();
  } catch (e) {
    throw new Error(e);
  }
  return json;
}

const request = (type, url, payload) => {  
  return (dispatch, getState) => {
    return attemptRequest(url, {
      begin: () => ({
        type: `${type}_PENDING`,
        payload
      }),
      success: response => ({
        type: `${type}_SUCCESS`,
        response,
        payload
      }),
      failure: error => ({
        type: `${type}_ERROR`,
        error,
        payload
      })
    }, () => fetch(url, payload)
      .then(checkStatus)
      .then(parseJSON)
    , dispatch);
  }
};

export default request; 