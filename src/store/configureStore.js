import { createStore, applyMiddleware, compose } from 'redux';
import { createRequestMiddleware } from 'redux-requests';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducers/reducer';

function configureStore(middlewares = []) {
  const composeEnhancer =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  const store = createStore(
    reducer,
    composeEnhancer(
      applyMiddleware(thunk, createRequestMiddleware(), ...middlewares)
    )
  );

  return {
    store,
    Provider
  };
}

export default configureStore;
