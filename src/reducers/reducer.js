import {combineReducers} from 'redux';
import {requestsReducer} from 'redux-requests';
import dictionary from './dictionary';

export default combineReducers({
  requestsReducer,
  dictionary
});
