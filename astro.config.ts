import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig, sharpImageService } from "astro/config";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import astrowind from "./vendor/integration";

import type { AstroIntegration } from "astro";
import {
	lazyImagesRehypePlugin,
	readingTimeRemarkPlugin,
	responsiveTablesRehypePlugin,
} from "./src/utils/frontmatter.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = true;
const whenExternalScripts = (
	items: (() => AstroIntegration) | (() => AstroIntegration)[] = [],
) =>
	hasExternalScripts
		? Array.isArray(items)
			? items.map((item) => item())
			: [items()]
		: [];

export default defineConfig({
	output: "static",

	integrations: [
		sitemap(),
		mdx(),
		icon({
			include: {
				tabler: ["*"],
				"flat-color-icons": [
					"template",
					"gallery",
					"approval",
					"document",
					"advertising",
					"currency-exchange",
					"voice-presentation",
					"business-contact",
					"database",
				],
			},
		}),
		...whenExternalScripts(() =>
			partytown({
				config: { forward: ["dataLayer.push"] },
			}),
		),
		compress({
			CSS: true,
			HTML: {
				"html-minifier-terser": {
					removeAttributeQuotes: false,
				},
			},
			Image: false,
			JavaScript: true,
			SVG: false,
			Logger: 1,
		}),
		astrowind({
			config: "./src/config.yaml",
		}),
	],

	image: {
		service: sharpImageService(),
		domains: ["cdn.pixabay.com"],
	},

	markdown: {
		remarkPlugins: [readingTimeRemarkPlugin],
		rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
	},

	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
	},
});
