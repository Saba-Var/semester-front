export type CustomButtonProps = {
  stylesType?: 'secondary-btn' | 'primary-btn' | 'soft-btn'
  children?: JSX.Element
  onClick?: () => void
  fullWidth?: boolean
  disabled?: boolean
  styles?: string
  title?: string
}
