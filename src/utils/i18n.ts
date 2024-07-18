import i18n from "i18next";
import { I18N } from 'astrowind:config';

import en from "src/assets/locales/en.json";
import fr from "src/assets/locales/fr.json";

export const resources = {
  en,
  fr,
} as const;

export const defaultNS = 'common';

export const retrieveI18n = async () => {
  if(!i18n.isInitialized) {
    await i18n.init({
      defaultNS,
      fallbackLng: I18N.language,
      resources,
    });
  }
  return i18n;
}
