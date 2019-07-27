import { REQUEST_DICTIONARY } from '../constants/actionTypes';
import api from '../api';

export function fetchDictionary () {
  return api.fetch(REQUEST_DICTIONARY, api.config.dictionary(), api.http.get());
}