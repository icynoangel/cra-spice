import './exampleClassComponent.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

class ExampleClassComponent extends Component {
  static propTypes = {
    initialCounter: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCounter
    };
  }

  handleButtonClick = () => {
    this.setState(
      (state) => ({
        counter: ++state.counter
      }),
      () => {
        this.props.onClick(this.state.counter);
      }
    );
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="example-class-component">
        <span
          className="example-class-component__counter"
          data-testid="qa-counter-value">
          <FormattedMessage id="counter" defaultMessage="Counter" />: {counter}
        </span>
        <button
          className="example-class-component__button"
          onClick={this.handleButtonClick}>
          <FormattedMessage id="clickMe" defaultMessage="Click Me" />
        </button>
      </div>
    );
  }
}

export default injectIntl(ExampleClassComponent);
