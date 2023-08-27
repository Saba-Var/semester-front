export type SlideOverProps = {
  showSubmitButton?: boolean
  submitHandler?: () => void
  addExtraSpace?: boolean
  openFromLeft?: boolean
  children: JSX.Element
  onClose?: () => void
  headerColor?: string
  titleColor?: string
  disabled?: boolean
  title: string
  open: boolean
}
