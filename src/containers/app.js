import './App.css';
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import en from 'react-intl/locale-data/en';
import ro from 'react-intl/locale-data/ro';

import { fetchDictionary } from '../actions/dictionary';
import Main from './Main';
import Admin from './Admin';
import Examples from './Examples';
import FetchData from './Wrappers/FetchData';
import { HOME_PAGE, ADMIN_PAGE, EXAMPLES_PAGE } from '../constants/routes';

addLocaleData([...en, ...ro]);

const App = () => {
  const dictionary = useSelector((state) => state.dictionary, shallowEqual);

  const routes = [
    { path: HOME_PAGE, component: Main },
    { path: ADMIN_PAGE, component: Admin },
    { path: EXAMPLES_PAGE, component: Examples }
  ];

  const fetchDataWrapperProps = {
    payload: 'en-EN',
    fetchData: fetchDictionary,
    error: dictionary.error,
    isFetching: dictionary.isFetching,
    fetched: dictionary.fetched
  };

  return (
    <FetchData {...fetchDataWrapperProps}>
      <IntlProvider
        key={dictionary.locale}
        locale={dictionary.locale}
        messages={dictionary.messages}>
        <Router>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Router>
      </IntlProvider>
    </FetchData>
  );
};

export default App;
