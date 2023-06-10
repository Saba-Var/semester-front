import { Moment } from 'moment'

export type DatepickerInputFieldProps = {
  isOutsideRange?: (date: Moment) => boolean
  showDefaultInputIcon?: boolean
  numberOfMonths?: number
  displayFormat?: string
  label?: string
  name: string
}
