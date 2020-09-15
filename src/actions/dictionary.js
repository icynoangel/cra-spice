import { REQUEST_DICTIONARY } from '../constants/actionTypes';
import api from '../api';
const {config, http, fetch} = api;
const {dictionary} = config;

export const fetchDictionary = ({locale}) => (dispatch) => {
  return dispatch(fetch(REQUEST_DICTIONARY, dictionary(locale), http.get()));
};
