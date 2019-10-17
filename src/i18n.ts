import * as Localization from 'expo-localization';
import i18n from 'i18next';

import enUs from '@/locales/en-US';

const locale = Localization.locale;

i18n.init({
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
  lng: locale,
  resources: {
    'en-US': enUs,
  },
});

export default i18n;
