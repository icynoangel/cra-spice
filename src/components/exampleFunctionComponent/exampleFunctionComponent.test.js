import React from 'react';
import ExampleFunctionComponent from './exampleFunctionComponent';
import { shallowWithIntl } from '../../testsHelper';
import enzymeToJson from 'enzyme-to-json';

describe('<ExampleFunctionComponent />', function () {
  beforeEach(() => {
    this.value = 10;

    this.getComponent = () => {
      return <ExampleFunctionComponent.WrappedComponent value={this.value} />;
    };
  });

  it('should render <ExampleFunctionComponent />', () => {
    const wrapper = shallowWithIntl(this.getComponent());
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });
});
