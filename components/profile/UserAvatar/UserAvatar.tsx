import useUserAvatar from './useUserAvatar'
import Image from 'next/image'

const UserAvatar = () => {
  const { user } = useUserAvatar()

  return (
    <div>
      {user.image?.url ? (
        <div className='w-32 h-32 relative'>
          <Image src={user.image?.url} alt='user avatar' layout='fill' />
        </div>
      ) : (
        <div
          className='w-32 h-32 backdrop-blur-md blur-md'
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/white-blurred-background_1034-249.jpg')`,
          }}
        ></div>
      )}

      <button
        type='button'
        className='rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
      >
        Button text
      </button>
    </div>
  )
}

export default UserAvatar
