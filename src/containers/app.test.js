import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { shallow, mount } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

describe('<App />', function () {

  beforeEach(() => {
    this.dictionary = {
      locale: 'en-EN',
      messages: {},
      fetched: true
    };
    this.fetchDictionary = jest.fn();

    this.getComponent = () => {
      return (
        <App.WrappedComponent
          dictionary={this.dictionary}
          fetchDictionary={this.fetchDictionary}
        />
      );
    };
  });

  it('should render <App />', () => {
    const wrapper = shallow(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should fetch dictionary when component mounts', () => {
    const wrapper = shallow(this.getComponent());
    expect(this.fetchDictionary).toHaveBeenCalled();
  });
});
