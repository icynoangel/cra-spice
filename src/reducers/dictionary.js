import {
  REQUEST_DICTIONARY_PENDING,
  REQUEST_DICTIONARY_SUCCESS,
  REQUEST_DICTIONARY_ERROR
} from '../constants/actionTypes';

const initialState = {
  messages: {},
  locale: 'en-EN',
  isFetching: false,
  fetched: false,
  error: null
};

const dictionary = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_DICTIONARY_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_DICTIONARY_SUCCESS:
      return {
        messages: action.response.messages,
        locale: action.response.locale,
        isFetching: false,
        fetched: true,
        error: null 
      };
    case REQUEST_DICTIONARY_ERROR:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        error: action.error
      };
    default: {
      return state;
    }
  }
};

export default dictionary;