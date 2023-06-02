export type SelectInputFieldProps = {
  name: string
  optionsList: {
    id: string | number
    title: string
  }[]
  title: string
  required?: boolean
}
