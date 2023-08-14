export type ModalWrapperProps = {
  submitHandler: (arg?: any) => void
  childrenContainerClassName?: string
  mainContainerClassName?: string
  type?: 'danger' | 'normal'
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  disabled?: boolean
  title: string
  open: boolean
}
