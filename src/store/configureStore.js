import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/reducer';

function configureStore(middlewares = []) {
  const store = createStore(reducer, applyMiddleware(thunk, ...middlewares));

  return {
    store,
    Provider
  };
}

export default configureStore;
