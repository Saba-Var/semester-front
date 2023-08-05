export type SlideOverProps = {
  showSubmitButton?: boolean
  submitHandler?: () => void
  openFromLeft?: boolean
  children: JSX.Element
  onClose?: () => void
  headerColor?: string
  disabled?: boolean
  title: string
  open: boolean
}
