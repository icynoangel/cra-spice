import React from 'react';
import App from './app';
import { mount } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
// import { fetchDictionary } from '../actions/dictionary';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(() => ({
    locale: 'en-EN',
    messages: {},
    fetched: true
  })),
  useDispatch: () => mockDispatch
}));

describe('<App />', function () {
  beforeEach(() => {
    this.getComponent = () => {
      return <App />;
    };
  });

  it('should render <App />', () => {
    const wrapper = mount(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should fetch dictionary when component mounts', () => {
    mount(this.getComponent());
    expect(mockDispatch).toHaveBeenCalled();
  });
});
