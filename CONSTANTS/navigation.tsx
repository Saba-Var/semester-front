import { CalendarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'
import { profile, cardSchedule } from 'public'

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
    image: profile,
    descriptionTranslationKey: 'profile_navigation_description',
  },
  {
    name: {
      ka: 'განრიგი',
      en: 'Schedule',
    },
    href: '/schedule',
    icon: CalendarIcon,
    image: cardSchedule,
    descriptionTranslationKey: 'schedule_navigation_description',
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
