import {REQUEST_EXAMPLES} from '../constants/actionTypes';
import api from '../api';
const {config, http, fetch} = api;
const {examples} = config;

export const fetchExamples = () => (dispatch) => {
  dispatch(fetch(REQUEST_EXAMPLES, examples, http.get()));
};
