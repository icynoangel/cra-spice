import { REQUEST_EXAMPLES } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/status';

export const initialState = {
  messages: {},
  isFetching: false,
  fetched: false,
  error: null
};

const examples = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case `${REQUEST_EXAMPLES}_${PENDING}`:
      return {
        ...state,
        isFetching: true
      };
    case `${REQUEST_EXAMPLES}_${SUCCESS}`:
      return {
        data: response.data,
        isFetching: false,
        fetched: true,
        error: null
      };
    case `${REQUEST_EXAMPLES}_${ERROR}`:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        error
      };
    default: {
      return state;
    }
  }
};

export default examples;
