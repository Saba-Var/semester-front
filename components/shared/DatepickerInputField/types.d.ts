import { Moment } from 'moment'

export type DatepickerInputFieldProps = {
  isOutsideRange?: (date: Moment) => boolean
  numberOfMonths?: number
  displayFormat?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  label?: string
  name: string
}
