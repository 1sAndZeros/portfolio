const socialLink = [
  {
    id: 1,
    name: 'Email',
    icon: 'fas fa-paper-plane',
    tag: 'rikiepatrick@gmail.com',
    href: 'mailto:rikiepatrick@gmail.com?subject=Hi Rikie',
  },
  {
    id: 2,
    name: 'GitHub',
    icon: 'fa-brands fa-github',
    tag: '1sAndZeros',
    href: 'https://github.com/1sAndZeros',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    tag: 'Rikie-Patrick',
    href: 'https://www.linkedin.com/in/rikie-patrick/',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: 'fa-brands fa-twitter',
    tag: '@RikiePatrick',
    href: 'https://twitter.com/RikiePatrick',
  },
  {
    id: 5,
    name: 'CodePen',
    icon: 'fa fa-codepen',
    tag: '1sAndZeros',
    href: 'https://codepen.io/1sAndZeros',
  },
];

export default socialLink;

export interface SocialLink {
    id: number;
    name: string;
    icon: string;
    tag: string;
    href: string;
}