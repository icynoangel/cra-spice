import { REQUEST_DICTIONARY } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/status';
import { fetchDictionary } from './/dictionary';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../api';
import fetchMock from 'fetch-mock';

describe('Actions - dictionary', function () {
  it('should call fetchDictionary actions success flow', (done) => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const response = {
      locale: 'en-EN',
      messages: {
        test: 'test'
      }
    };
    const expectedActions = [
      { type: `${REQUEST_DICTIONARY}_${PENDING}` },
      { type: `${REQUEST_DICTIONARY}_${SUCCESS}`, response }
    ];

    const store = mockStore({});
    fetchMock.get(api.config.dictionary('en-EN'), {
      status: 200,
      body: response
    });

    store.dispatch(fetchDictionary('en-EN'));
    // to track both actions we need to assert on next tick
    setTimeout(() => {
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
      expect(store.getActions()[1].response).toEqual(
        expectedActions[1].response
      );
      done();
    }, 10);
  });
  it('should call fetchDictionary actions error flow', (done) => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    const expectedActions = [
      { type: `${REQUEST_DICTIONARY}_${PENDING}` },
      { type: `${REQUEST_DICTIONARY}_${ERROR}` }
    ];

    const store = mockStore({});
    fetchMock.get(api.config.dictionary('en-EN'), {
      status: 404,
      body: {}
    });

    store.dispatch(fetchDictionary('en-EN'));
    // to track both actions we need to assert on next tick
    setTimeout(() => {
      expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
      expect(store.getActions()[1].type).toEqual(expectedActions[1].type);
      done();
    }, 10);
  });
});
