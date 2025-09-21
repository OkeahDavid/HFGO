import type { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
    children: [
      {
        label: 'What We Do',
        path: '/values',
      },
      {
        label: 'Our History',
        path: '/history',
      },
      {
        label: 'Our Beliefs',
        path: '/beliefs',
      },
      {
        label: 'Dennis & Rita Okeah',
        path: '/founder',
      },
      {
        label: 'Donations and Giving',
        path: '/donations',
      },
    ],
  },
  {
    label: 'Fellowship',
    path: '/fellowship',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];