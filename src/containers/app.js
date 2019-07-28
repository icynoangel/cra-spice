import './app.css';
import React, {Component} from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {fetchDictionary} from '../actions/dictionary';
import ExampleClassComponent from '../components/exampleClassComponent';
import ExampleFunctionComponent from '../components/exampleFunctionComponent';

class App extends Component {
  render() {
    const {dictionary} = this.props;

    if (dictionary.fetched) {
      return (
        <IntlProvider
          key={dictionary.locale}
          locale={dictionary.locale}
          messages={dictionary.messages}>
          <div className="app">
            <div className="app-content">
              <ExampleClassComponent initialCounter={10} />
              <ExampleFunctionComponent value={100} />
            </div>
          </div>
        </IntlProvider>
      );
    }
    return null;
  }

  componentDidMount() {
    this.props.fetchDictionary();
  }
}

const mapStateToProps = (state) => {
  return {
    dictionary: state.dictionary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDictionary: () => {
      return dispatch(fetchDictionary());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
