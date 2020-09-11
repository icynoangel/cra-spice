import React from 'react';
import { IntlProvider } from 'react-intl';

import dictionaryMock from './api/mocks/dictionary';

const intlProvider = new IntlProvider(
  { locale: dictionaryMock.locale, messages: dictionaryMock.messages },
  {}
);
const { intl } = intlProvider.getChildContext();

export const WrapIntlProvider = ({ children }) => {
  return (
    <IntlProvider
      key={dictionaryMock.locale}
      locale={dictionaryMock.locale}
      messages={dictionaryMock.messages}>
      {children}
    </IntlProvider>
  );
};

export default intl;
