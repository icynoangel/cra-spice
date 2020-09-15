import dictionary, { initialState } from './dictionary';
import { REQUEST_DICTIONARY } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/status';

describe('Reducers - dictionary', function () {
  beforeEach(() => {
    this.state = {
      ...initialState
    };
  });

  it('should return initial state', () => {
    expect(dictionary(this.state, { type: 'unhandled' })).toEqual(this.state);
  });

  it('should handle REQUEST_DICTIONARY_PENDING action', () => {
    const expected = {
      ...initialState,
      isFetching: true
    };
    const action = {
      type: `${REQUEST_DICTIONARY}_${PENDING}`
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
      type: `${REQUEST_DICTIONARY}_${SUCCESS}`,
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
      type: `${REQUEST_DICTIONARY}_${ERROR}`,
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
