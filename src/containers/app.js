import './app.css';
import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { fetchDictionary } from '../actions/dictionary';
import Main from './main';
import Admin from './admin';
import Examples from '../components/Examples';

import en from 'react-intl/locale-data/en';
import ro from 'react-intl/locale-data/ro';
import { withFetchData } from '../utils/decorators';
import { HOME_PAGE, ADMIN_PAGE, EXAMPLES_PAGE } from '../constants/routes';

addLocaleData([...en, ...ro]);

const App = ({ data: dictionary }) => {
  // const dictionary = useSelector((state) => state.dictionary, shallowEqual);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchDictionary('en-EN'));
  // }, [dispatch]);

  const routes = [
    { path: HOME_PAGE, component: Main },
    { path: ADMIN_PAGE, component: Admin },
    { path: EXAMPLES_PAGE, component: Examples }
  ]

  return (
    <IntlProvider
      key={dictionary.locale}
      locale={dictionary.locale}
      messages={dictionary.messages}>
      <Router>
        {routes.map((route, index) => <Route key={index} path={route.path} exact component={route.component} />)}
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  const { dictionary } = state;
  return {
    data: dictionary.data || [],
    isFetching: dictionary.isFetching,
    error: dictionary.error,
    payload: { locale: 'en-EN' }
  };
};

const mapDispatchToProps = {
  fetchData: fetchDictionary
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFetchData()
);

export default enhance(App);