import React from 'react';
import './App.css';
import { FormattedTime } from 'react-intl'

import { I18nProvider, LOCALES } from './i18nProvider';
import translate from "./i18nProvider/translate";
import Pluralize from './Pluralize';

function App() {

  const formattedDate = (locale) => {
    return new Intl.DateTimeFormat(locale || 'en-US').format(new Date())
  }

  return (
    <I18nProvider >
      {
        (onSetLocale, locale) => {
          return (
            <div className="App">
              <header className="App-header">
                <button onClick={() => onSetLocale(LOCALES.ENGLISH)}>🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 🇺🇸 </button>
                <button onClick={() => onSetLocale(LOCALES.POLISH)}> 🇵🇱 🇵🇱 🇵🇱 🇵🇱 🇵🇱 🇵🇱 🇵🇱 🇵🇱 </button>
                <button onClick={() => onSetLocale()}> ❓❓❓❓❓❓❓❓❓❓ </button>

                <h2>
                  {translate('hello')}
                </h2>

                <p>{translate('today', 'Today')} {formattedDate(locale)}</p>
                <FormattedTime value={new Date()} />

                <p>
                  {translate('edit-file',
                    "Oh no! Someone forgot to <b>translate this text </b>and this is a default message :(",
                    { file: <span>src/App.js</span>, b: txt => <b><u>{txt}</u></b>, }
                  )}
                </p>

                <Pluralize />

              </header>
            </div>
          )
        }
      }
    </I18nProvider>
  );
}

export default App;
