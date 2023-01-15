import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: {
      ka: 'მთავარი',
      en: 'Dashboard',
    },
    href: '/',
    icon: HomeIcon,
    current: true,
  },
  {
    name: {
      ka: 'პროფილი',
      en: 'Profile',
    },
    href: '/profile',
    icon: UsersIcon,
    current: false,
  },
  {
    name: {
      ka: 'კალენდარი',
      en: 'Calendar',
    },
    href: '/calendar',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: {
      ka: 'დოკუმენტები',
      en: 'Documents',
    },
    href: '/documents',
    icon: InboxIcon,
    current: false,
  },
]

export const userNavigation = [
  {
    name: {
      ka: 'შენი პროფილი',
      en: 'Your Profile',
    },
    href: '/profile',
  },
  {
    name: {
      ka: 'გასვლა',
      en: 'Sign out',
    },
    href: '#',
  },
]
