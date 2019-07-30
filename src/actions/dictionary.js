import {REQUEST_DICTIONARY} from '../constants/actionTypes';
import api from '../api';

export function fetchDictionary(locale) {
  return api.fetch(
    REQUEST_DICTIONARY,
    api.config.dictionary(locale),
    api.http.get()
  );
}
