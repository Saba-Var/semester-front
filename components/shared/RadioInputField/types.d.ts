export type RadioInputFieldProps = {
  name: string
  dataList: {
    value: string
    id: string
    title: string
  }[]
  title: string
  required?: boolean
}
