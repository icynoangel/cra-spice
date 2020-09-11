import React from 'react';
import { render, screen } from '@testing-library/react';
import intl, { WrapIntlProvider } from '../../testsHelper';
import ExampleFunctionComponent, {
  MULTIPLY_FACTOR
} from './exampleFunctionComponent';

describe('<ExampleFunctionComponent />', function () {
  beforeEach(() => {
    this.value = 10;

    this.getComponent = () => {
      return (
        <WrapIntlProvider>
          <ExampleFunctionComponent value={this.value} />
        </WrapIntlProvider>
      );
    };
  });

  it('should render <ExampleFunctionComponent />', () => {
    render(this.getComponent());
    expect(screen.getByRole('article').textContent).toEqual(
      `${intl.formatMessage({ id: 'multipliedValue' })} ${
        this.value * MULTIPLY_FACTOR
      }`
    );
  });
});
