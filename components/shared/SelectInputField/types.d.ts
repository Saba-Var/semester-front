export type SelectInputFieldProps = {
  name: string
  optionsList: {
    id: string | number
    title: string
  }[]
  required?: boolean
  disabled?: boolean
  title: string
}
