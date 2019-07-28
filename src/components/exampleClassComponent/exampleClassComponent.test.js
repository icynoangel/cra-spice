import React from 'react';
import ExampleClassComponent from './exampleClassComponent';
import {shallowWithIntl} from '../../testsHelper';
import enzymeToJson from 'enzyme-to-json';

describe('<ExampleClassComponent />', function() {
  beforeEach(() => {
    this.initialCounter = 10;

    this.getComponent = () => {
      return (
        <ExampleClassComponent.WrappedComponent
          initialCounter={this.initialCounter}
        />
      );
    };
  });

  it('should render <ExampleClassComponent />', () => {
    const wrapper = shallowWithIntl(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should increase counter when button is clicked', () => {
    const wrapper = shallowWithIntl(this.getComponent());
    const btn = wrapper.find('button');

    btn.simulate('click');
    expect(wrapper.state().counter).toEqual(11);
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
});
