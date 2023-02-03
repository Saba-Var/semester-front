import Cookies from 'js-cookie'

export const requestsExceed = () => {
  const userLanguage = Cookies.get('language')
  location.assign(`${userLanguage === 'en' ? '/en' : ''}/requests-exceed`)
}
