export type CustomButtonProps = {
  stylesType?: 'secondary-btn' | 'primary-btn' | 'soft-btn'
  children?: JSX.Element
  onClick?: () => void
  disabled?: boolean
  styles?: string
  title?: string
}
