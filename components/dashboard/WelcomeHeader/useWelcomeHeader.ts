import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import { useGetUserData } from 'hooks'
import { DayGreetings } from 'types'

const useWelcomeHeader = () => {
  const [greeting, setGreeting] = useState<DayGreetings | string>('')

  const { t } = useTranslation('dashboard')
  const { user } = useGetUserData()

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting(DayGreetings.Morning)
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting(DayGreetings.Afternoon)
    } else {
      setGreeting(DayGreetings.Evening)
    }
  }, [])

  return { greeting, t, username: user?.username }
}

export default useWelcomeHeader
