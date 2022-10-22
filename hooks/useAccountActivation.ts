import { accountActivation } from 'services'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

const useAccountActivation = () => {
  const [activationSuccess, setActivationSuccess] = useState(false)
  const [alreadyActivated, setAlreadyActivated] = useState(false)
  const [activationFail, setActivationFail] = useState(false)

  const { query } = useRouter()
  const token = query.token

  const { mutate: activateAccount } = useMutation(accountActivation)

  useEffect(() => {
    if (token?.length && typeof token === 'string') {
      activateAccount(token, {
        onSuccess: () => {
          setActivationSuccess(true)
        },

        onError: (error: any) => {
          if (error.response.status === 409) {
            setAlreadyActivated(true)
          } else {
            setActivationFail(true)
          }
        },
      })
    }
  }, [activateAccount, token])

  return { activationSuccess, alreadyActivated, activationFail }
}

export default useAccountActivation
