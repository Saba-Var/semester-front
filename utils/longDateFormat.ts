export const longDateFormat = (date: string, locales: string = 'en-US') => {
  return new Date(date).toLocaleDateString(locales, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
