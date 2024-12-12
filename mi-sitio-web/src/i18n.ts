import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esTranslations from './locales/es.json';
import thTranslations from './locales/th.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslations },
      th: { translation: thTranslations }
    },
    fallbackLng: 'es', // Fallback a español si no se encuentra traducción
    debug: import.meta.env.DEV, // Solo debug en desarrollo
    interpolation: {
      escapeValue: false // React ya escapa los valores
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // Guardar preferencia en localStorage
      lookupLocalStorage: 'language'
    }
  });

export default i18n;
