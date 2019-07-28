import dictionary, {initialState} from './dictionary';
import {
  REQUEST_DICTIONARY_PENDING,
  REQUEST_DICTIONARY_SUCCESS,
  REQUEST_DICTIONARY_ERROR
} from '../constants/actionTypes';

describe('Reducers - dictionary', function() {
  beforeEach(() => {
    this.state = {
      ...initialState
    };
  });

  it('should return initial state by default', () => {
    expect(dictionary(initialState, {type: 'unhandled'})).toEqual(initialState);
  });

  it('should handle REQUEST_DICTIONARY_PENDING action', () => {
    const expected = {
      ...initialState,
      isFetching: true
    };
    const action = {
      type: REQUEST_DICTIONARY_PENDING
    };
    expect(dictionary(initialState, action)).toEqual(expected);
  });

  it('should handle REQUEST_DICTIONARY_SUCCESS action', () => {
    const response = {
      messages: {
        test: 'test'
      },
      locale: 'en-EN'
    };
    const expected = {
      ...initialState,
      isFetching: false,
      fetched: true,
      ...response
    };
    const action = {
      type: REQUEST_DICTIONARY_SUCCESS,
      response
    };
    expect(
      dictionary(
        {
          ...initialState,
          isFetching: true
        },
        action
      )
    ).toEqual(expected);
  });

  it('should handle REQUEST_DICTIONARY_ERROR action', () => {
    const response = {
      error: 'error'
    };
    const expected = {
      ...initialState,
      isFetching: false,
      fetched: true,
      ...response
    };
    const action = {
      type: REQUEST_DICTIONARY_ERROR,
      ...response
    };
    expect(
      dictionary(
        {
          ...initialState,
          isFetching: true
        },
        action
      )
    ).toEqual(expected);
  });
});
