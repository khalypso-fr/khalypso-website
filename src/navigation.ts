import { getPermalink, getBlogPermalink } from './utils/permalinks';
import type { Props as HeaderProps } from './components/widgets/Header.astro';
import type { Props as FooterProps } from './components/widgets/Footer.astro';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
} satisfies HeaderProps;

export const footerData = {
  links: [
    {
      title: 'Mentions légales pour applications',
      links: [{ text: 'Chasseurs de boîtes', href: getPermalink('/softwares/chasseurs-de-boites') }],
    },
  ],
  secondaryLinks: [{ text: 'Mentions légales', href: getPermalink('/mentions-legales') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/khalypso-fr' }],
} satisfies FooterProps;
