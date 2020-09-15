import ErrorBoundary from '../components/Placeholders/ErrorBoundary';
import Loading from '../components/Placeholders/Loading';
import React, {Component} from 'react';

export const withFetchData = () => (WrappedComponent) => {
  return class FetchDataComponent extends Component {
    componentDidMount() {
      const {payload, fetchData} = this.props;
      if (fetchData) {
        fetchData(payload);
      }
    }

    componentWillUnmount() {
      const {resetData} = this.props;
      if (resetData) {
        resetData();
      }
    }

    render() {
      const {error, isFetching} = this.props;
      if (error) {
        return <ErrorBoundary hasError={!!error} />;
      }

      if (isFetching) {
        return <Loading />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};
