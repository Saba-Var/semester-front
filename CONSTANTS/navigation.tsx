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
  },
  {
    name: {
      ka: 'პროფილი',
      en: 'Profile',
    },
    href: '/profile',
    icon: UsersIcon,
  },
  {
    name: {
      ka: 'განრიგი',
      en: 'Schedule',
    },
    href: '/schedule',
    icon: CalendarIcon,
  },
  {
    name: {
      ka: 'დოკუმენტები',
      en: 'Documents',
    },
    href: '/documents',
    icon: InboxIcon,
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
    href: '/overview',
  },
] as const
