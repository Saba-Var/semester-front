import { carOnFire, party, girlWithLaptop, searching } from 'public'
import { accountActivation } from 'services'
import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

const useAccountActivation = () => {
  const [activationSuccess, setActivationSuccess] = useState(false)
  const [alreadyActivated, setAlreadyActivated] = useState(false)
  const [accountNotFound, setAccountNotFound] = useState(false)
  const [activationFail, setActivationFail] = useState(false)

  const [isMounted, setIsMounted] = useState(false)

  let imageSrc = activationSuccess
    ? party
    : alreadyActivated
    ? girlWithLaptop
    : accountNotFound
    ? searching
    : activationFail
    ? carOnFire
    : ''

  const { query } = useRouter()
  const token = query.token

  const { mutate: activateAccount, isLoading } = useMutation(accountActivation)

  useEffect(() => {
    if (token?.length && typeof token === 'string') {
      activateAccount(token, {
        onSuccess: () => {
          setActivationSuccess(true)
        },

        onError: (error: any) => {
          const status = error.response.status
          if (status === 409) {
            setAlreadyActivated(true)
          } else if (status === 404) {
            setAccountNotFound(true)
          } else {
            setActivationFail(true)
          }
        },
      })
    }

    setIsMounted(true)
  }, [activateAccount, token])

  return {
    activationSuccess,
    alreadyActivated,
    accountNotFound,
    activationFail,
    isMounted,
    isLoading,
    imageSrc,
  }
}

export default useAccountActivation