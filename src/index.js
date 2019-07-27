import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/app';
import logger from './middlewares/logger';
import * as serviceWorker from './serviceWorker';

const storeConfig = configureStore([logger]);

ReactDOM.render(
  <storeConfig.Provider store={storeConfig.store}>
    <App />
  </storeConfig.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
