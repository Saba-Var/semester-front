import { Moment } from 'moment'

export type DatepickerInputFieldProps = {
  isOutsideRange?: (date: Moment) => boolean
  showDefaultInputIcon?: boolean
  numberOfMonths?: number
  displayFormat?: string
  placeholder?: string
  required?: boolean
  label?: string
  name: string
}
