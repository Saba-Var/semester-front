import useWelcomeHeader from './useWelcomeHeader'

const WelcomeHeader = () => {
  const { greeting, t, username } = useWelcomeHeader()

  return (
    <div className='h-9 text-2xl text-center font-medium my-10'>
      {username && t(greeting, { username })}
    </div>
  )
}

export default WelcomeHeader
