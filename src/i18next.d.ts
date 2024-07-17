import 'i18next';
import { resources, defaultNS } from "./utils/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS,
    resources: typeof resources["fr"];
  }
}
