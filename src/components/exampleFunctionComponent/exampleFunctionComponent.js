import './exampleFunctionComponent.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const MULTIPLY_FACTOR = 10;

const ExampleFunctionComponent = ({ value, intl }) => {
  const multipliedValue = value * MULTIPLY_FACTOR;
  return (
    <div className="example-function-component">
      {intl.formatMessage({
        id: 'multipliedValue',
        defaultMessage: 'Multiplied Value'
      })}{' '}
      {multipliedValue}
    </div>
  );
};

ExampleFunctionComponent.propTypes = {
  value: PropTypes.number,
  intl: PropTypes.object
};

export default injectIntl(ExampleFunctionComponent);
