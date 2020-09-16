import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import intl, { WrapIntlProvider } from '../../testsHelper';
import ExampleClassComponent from './ExampleClassComponent';

describe('<ExampleClassComponent />', function () {
  this.getComponent = () => {
    return (
      <WrapIntlProvider>
        <ExampleClassComponent
          onClick={this.handleClick}
          initialCounter={this.initialCounter}
        />
      </WrapIntlProvider>
    );
  };

  beforeEach(() => {
    this.initialCounter = 10;
    this.handleClick = jest.fn();
  });

  it('should render <ExampleClassComponent />', () => {
    const { container } = render(this.getComponent());
    expect(container).toMatchSnapshot();
  });

  it('should increase counter when button is clicked', () => {
    render(this.getComponent());
    userEvent.click(screen.getByRole('button'));
    expect(this.handleClick).toHaveBeenCalled();
    expect(screen.getByTestId('qa-counter-value').textContent).toEqual(
      `${intl.formatMessage({ id: 'counter' })}: 11`
    );
  });
});
