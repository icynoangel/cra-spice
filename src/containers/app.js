import './app.css';
import React, {Component} from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import {fetchDictionary} from '../actions/dictionary';
import ThemeHandler from '../components/themeHandler';
import ThemeSwitcher from './themeSwitcher';
import ExampleClassComponent from '../components/exampleClassComponent';
import ExampleFunctionComponent from '../components/exampleFunctionComponent';

import en from 'react-intl/locale-data/en';
import ro from 'react-intl/locale-data/ro';

addLocaleData([...en, ...ro]);

class App extends Component {
  render() {
    const {dictionary, theme} = this.props;

    if (dictionary.fetched) {
      return (
        <IntlProvider
          key={dictionary.locale}
          locale={dictionary.locale}
          messages={dictionary.messages}>
          <div className="app" key="app">
            <ThemeHandler theme={theme} />
            <div className="app-content">
              <ExampleClassComponent
                initialCounter={10}
                key="example-class-component"
              />
              <ExampleFunctionComponent
                value={100}
                key="example-function-component"
              />
              <ThemeSwitcher />
            </div>
          </div>
        </IntlProvider>
      );
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchDictionary('ro-RO');

    setTimeout(() => {
      this.props.fetchDictionary('en-EN');
    }, 5000);
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary,
    theme: state.theme
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
