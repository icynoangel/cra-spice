import './app.css';
import React, { useEffect } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchDictionary } from '../actions/dictionary';
import Main from './main';
import Admin from './admin';

import en from 'react-intl/locale-data/en';
import ro from 'react-intl/locale-data/ro';

addLocaleData([...en, ...ro]);

const App = () => {
  const dictionary = useSelector((state) => state.dictionary, shallowEqual);
  const dispatch = useDispatch(fetchDictionary);

  useEffect(() => {
    dispatch(fetchDictionary('en-EN'));
  }, [dispatch]);

  if (dictionary.fetched) {
    return (
      <IntlProvider
        key={dictionary.locale}
        locale={dictionary.locale}
        messages={dictionary.messages}>
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/admin" exact component={Admin} />
        </Router>
      </IntlProvider>
    );
  }
  return null;
};

export default App;
