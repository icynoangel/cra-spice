import {combineReducers} from 'redux';
import {requestsReducer} from 'redux-requests';
import dictionary from './dictionary';
import theme from './theme';

export default combineReducers({
  requests: requestsReducer,
  dictionary,
  theme
});
