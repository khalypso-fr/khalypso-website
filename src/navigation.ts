import type { Props as FooterProps } from "./components/ui/Footer.astro";
import type { Props as HeaderProps } from "./components/ui/Header.astro";

export const headerData = {
	actions: [
		{
			text: "Contactez-nous",
			href: "/contact",
		},
	],
} satisfies HeaderProps;

export const footerData = {
	links: [
		{
			title: "A propos",
			links: [{ text: "Mentions légales", href: "/mentions-legales" }],
		},
		{
			title: "Mentions légales pour applications",
			links: [
				{
					text: "Chasseurs de boîtes",
					href: "/apps/chasseurs-de-boites",
				},
			],
		},
	],
	socialLinks: [
		{
			ariaLabel: "Github",
			icon: "tabler:brand-github",
			href: "https://github.com/khalypso-fr",
		},
	],
} satisfies FooterProps;
