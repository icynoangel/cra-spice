import React from 'react';
import App from './app';
import { render } from '@testing-library/react';
import { fetchDictionary } from '../actions/dictionary';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => ({
    locale: 'en-EN',
    messages: {
      counter: 'Counter',
      clickMe: 'Click Me',
      multipliedValue: 'Multiplied Value'
    },
    fetched: true
  })),
  useDispatch: () => mockDispatch
}));

jest.mock('../actions/dictionary');

describe.skip('<App />', function () {
  it('should render <App />', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should fetch dictionary when component mounts', () => {
    render(<App />);
    expect(fetchDictionary).toHaveBeenCalledWith('en-EN');
    expect(mockDispatch).toHaveBeenCalledWith('fetchDictionary');
  });
});
