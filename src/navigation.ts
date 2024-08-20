import { getPermalink, getBlogPermalink } from './utils/permalinks';
import type { Props as HeaderProps } from './components/widgets/Header.astro';
import type { Props as FooterProps } from './components/widgets/Footer.astro';

export const headerData = {
  links: [
    {
      text: 'Notre offre',
      href: getPermalink('/#offres'),
    },
    {
      text: 'Nos réalisations',
      href: getPermalink('/#realisations'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'Contactez-nous',
      href: getPermalink('/contact'),
      variant: 'primary',
    },
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
