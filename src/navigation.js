import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Applications',
      links: [
        {
          text: 'Chasseurs de boîtes',
          href: getPermalink('/softwares/chasseurs-de-boites'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Applications',
      links: [{ text: 'Chasseurs de boîtes', href: getPermalink('/softwares/chasseurs-de-boites') }],
    },
  ],
  secondaryLinks: [{ text: 'Mentions légales', href: getPermalink('/mentions-legales') }],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/khalypso-fr' }],
};
