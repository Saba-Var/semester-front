import EnLocale from 'date-fns/locale/en-US'
import kaLocale from 'date-fns/locale/ka'
import { format } from 'date-fns'

export const longDateFormat = (date: string, locale: string) => {
  return format(new Date(date), 'MMMM d, yyyy', {
    locale: locale === 'ka' ? kaLocale : EnLocale,
  })
}
