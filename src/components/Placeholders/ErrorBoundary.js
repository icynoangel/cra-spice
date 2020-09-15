import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    hasError: PropTypes.bool
  };

  state = { hasError: this.props.hasError || false };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError, children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
