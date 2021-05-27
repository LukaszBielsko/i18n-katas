import React, { Fragment, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import messages from './messages';
import { LOCALES } from '../i18nProvider/constants';

const Provider = ({ children }) => {

  const [locale, setLocale] = useState('');

  useEffect(() => {
    const storageLanguage = localStorage.getItem('userLang')
    if (!storageLanguage) {
      localStorage.setItem('userLang', 'en-US')
    }
    setLocale(storageLanguage || 'en-US')
  }, [])

  const onSetLocale = (locale) => {
    setLocale(locale)
    localStorage.setItem('userLang', locale)
  }

  return (
    <IntlProvider
      textComponent={Fragment}
      defaultLocale={LOCALES.ENGLISH}
      locale={locale}
      messages={messages[locale]}>
      {children(onSetLocale, locale)}
    </IntlProvider>
  )
};

export default Provider;
