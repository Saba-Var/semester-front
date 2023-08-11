export type ModalWrapperProps = {
  type?: 'danger' | 'normal'
  submitHandler: (arg?: any) => void
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  disabled?: boolean
  title: string
  open: boolean
}
