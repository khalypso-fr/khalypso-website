import i18n from "i18next";
import en from "src/assets/locales/en.json";
import fr from "src/assets/locales/fr.json";

export const resources = {
  en,
  fr,
} as const;

export const defaultNS = 'translation';

export const retrieveI18n = async () => {
  if(!i18n.isInitialized) {
    await i18n.init({
      defaultNS,
      fallbackLng: 'en',
      resources,
      debug: true
    });
  }
  return i18n;
}
