import { accountActivation } from 'services'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

const useAccountActivation = () => {
  const [activationSuccess, setActivationSuccess] = useState(false)
  const [alreadyActivated, setAlreadyActivated] = useState(false)
  const [activationFail, setActivationFail] = useState(false)

  const { query } = useRouter()
  const jwtToken = query.token

  const { mutate: activateAccount } = useMutation(accountActivation)

  useEffect(() => {
    if (jwtToken && typeof jwtToken === 'string') {
      activateAccount(jwtToken, {
        onError: (error: any) => {
          if (error.response.status === 409) {
            setAlreadyActivated(true)
          } else {
            setActivationFail(true)
          }
        },

        onSuccess: () => {
          setActivationSuccess(true)
        },
      })
    }
  }, [activateAccount, jwtToken])

  return { activationSuccess, alreadyActivated, activationFail }
}

export default useAccountActivation
