import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  FolderIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

export const featuresList = [
  {
    name: 'სისწრაფე',
    description: 'განრიგის შედგენა ბევრად სწრაფად შეგიძლიათ',
    icon: BoltIcon,
  },
  {
    name: 'მარტივი დიზაინი',
    description:
      'დიზაინი ამარტივებს აპლიკაციის გამოყენებას და ამდიდრებს მომხმარებლის გამოცდილებას',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'არანაირი გადასახადი',
    description: 'აპლიკაცია უფასოა ნებისმიერი მომხმარებლისთვის',
    icon: CircleStackIcon,
  },
  {
    name: 'უნივერსიტეტის განრიგის შედგენა',
    description:
      'შესაძლებელია საუნივერსიტეტო განრიგის შედგენა, შესაბამისი ლექტორებისა და სემინარის ხელმძღვანელების არჩევით',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'მოქნილობა',
    description:
      'შეგიძლია შეადგინო იმდენი განრიგის ვარიანტი რამდენიც გინდა და შემდეგ აარჩიო საუკეთესო მათგანი',
    icon: FolderIcon,
  },

  {
    name: 'რესპონსიულობა',
    description:
      'აპლიკაციის დიზაინი სრულად არის მორგებული ნებისმიერი სახის მოწყობილობისთვის',
    icon: DevicePhoneMobileIcon,
  },
] as const
