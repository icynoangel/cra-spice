import React from 'react';
import { IntlProvider, intlShape } from 'react-intl';
import { mount, shallow } from 'enzyme';

import dictionaryMock from './api/mocks/dictionary';

const intlProvider = new IntlProvider(
  { locale: dictionaryMock.locale, messages: dictionaryMock.messages },
  {}
);
const { intl } = intlProvider.getChildContext();

export default intl;

/**
 * When using React-Intl `injectIntl` on components, props.intl is required.
 */
function nodeWithIntlProp(node) {
  return React.cloneElement(node, { intl });
}

export function shallowWithIntl(node, { context, ...additionalOptions } = {}) {
  return shallow(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    ...additionalOptions
  });
}

export function mountWithIntl(
  node,
  { context, childContextTypes, ...additionalOptions } = {}
) {
  return mount(nodeWithIntlProp(node), {
    context: Object.assign({}, context, { intl }),
    childContextTypes: Object.assign(
      {},
      { intl: intlShape },
      childContextTypes
    ),
    ...additionalOptions
  });
}
