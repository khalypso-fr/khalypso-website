import "i18next";
import type { defaultNS, resources } from "./utils/i18n";

declare module "i18next" {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: (typeof resources)["fr"];
	}
}
