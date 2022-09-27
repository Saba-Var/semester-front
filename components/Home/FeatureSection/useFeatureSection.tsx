import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  FolderIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

export const useFeatureSection = () => {
  const featuresList = [
    {
      name: 'სისწრაფე',
      description: 'განრიგის შედგენა რამდენჯერმე სწრაფად შეგიძლიათ',
      icon: BoltIcon,
    },
    {
      name: 'მარტივი დიზაინი',
      description:
        'დიზაინი ყველასთვის მარტივად გასაგებია და ამარტივებს აპლიკაციის გამოყენებას',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'არანაირი გადასახადი',
      description: 'აპლიკაცია უფასოა ნებისმიერი მომხმარებლისთვის',
      icon: CircleStackIcon,
    },
    {
      name: 'უნივერსიტეტის განრიგი',
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
  ]

  return { featuresList }
}
