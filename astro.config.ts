import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import path from "node:path";
import { fileURLToPath } from "node:url";

import partytown from "@astrojs/partytown";

import compress from "astro-compress";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	site: "https://khalypso.fr",
	output: "static",
	integrations: [
		sitemap(),
		mdx(),
		icon({
			include: {
				tabler: ["*"],
			},
		}),
		partytown(),
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
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
	},
});