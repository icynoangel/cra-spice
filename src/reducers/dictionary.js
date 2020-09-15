import { REQUEST_DICTIONARY } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/status';

export const initialState = {
  messages: {},
  locale: 'en-EN',
  isFetching: false,
  fetched: false,
  error: null
};

const dictionary = (state = initialState, action) => {
  const { type, response, error } = action;

  switch (type) {
    case `${REQUEST_DICTIONARY}_${PENDING}`:
      return {
        ...state,
        isFetching: true
      };
    case `${REQUEST_DICTIONARY}_${SUCCESS}`:
      return {
        messages: response.messages,
        locale: response.locale,
        isFetching: false,
        fetched: true,
        error: null
      };
    case `${REQUEST_DICTIONARY}_${ERROR}`:
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

export default dictionary;
