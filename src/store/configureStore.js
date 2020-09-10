import { createStore, applyMiddleware, compose } from 'redux';
import { createRequestMiddleware } from 'redux-requests';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducer';

function configureStore(middlewares = []) {
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, createRequestMiddleware(), ...middlewares))
  );

  return {
    store,
    Provider
  };
}

export default configureStore;
