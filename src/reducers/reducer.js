import { combineReducers } from 'redux';
import { requestsReducer } from 'redux-requests';
import dictionary from './dictionary';
import examples from './examples';

export default combineReducers({
  requests: requestsReducer,
  dictionary,
  examples
});
