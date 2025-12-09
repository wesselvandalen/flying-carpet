import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';

import global_en from './translations/en/global.json';
import global_nl from './translations/nl/global.json';

function getLanguage() {
  const lang = localStorage.getItem('lang');

  if (lang === 'en' || lang === 'nl') {
    document.documentElement.lang = lang;
    return lang;
  }

  localStorage.setItem('lang', 'en');
  document.documentElement.lang = 'en';
  return 'en';
}

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: true },
  lng: getLanguage(),
  resources: {
    nl: { global: global_nl },
    en: { global: global_en },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18next={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);