export type ModalWrapperProps = {
  submitHandler: (arg?: any) => void
  containerClassName?: string
  type?: 'danger' | 'normal'
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  disabled?: boolean
  title: string
  open: boolean
}
