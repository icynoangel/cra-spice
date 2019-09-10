import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import intl from '../src/testsHelper';
import ExampleClassComponent from '../src/components/exampleClassComponent';

storiesOf('ExampleClassComponent', module)
  .add('with initialCounter 10', () => (
    <ExampleClassComponent.WrappedComponent 
      onClick={action('clicked')}
      initialCounter={10}
      intl={intl}
    />
  ));
