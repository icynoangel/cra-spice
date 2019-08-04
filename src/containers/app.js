import './app.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {fetchDictionary} from '../actions/dictionary';
import Main from './main';
import Admin from './admin';

import en from 'react-intl/locale-data/en';
import ro from 'react-intl/locale-data/ro';

addLocaleData([...en, ...ro]);

class App extends Component {
  static propTypes = {
    dictionary: PropTypes.object,
    fetchDictionary: PropTypes.func.isRequired
  };

  render() {
    const {dictionary} = this.props;

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
  }

  componentDidMount() {
    this.props.fetchDictionary('en-EN');
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDictionary: (locale) => {
      return dispatch(fetchDictionary(locale));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
