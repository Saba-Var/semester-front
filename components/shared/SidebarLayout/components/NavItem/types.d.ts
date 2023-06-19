import { SVGProps } from 'react'

export type NavItemProps = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  isDesktopSideBarOpen: boolean
  clickHandler?: () => void
  isCurrentRoute: boolean
  href: string
  name: string
}
