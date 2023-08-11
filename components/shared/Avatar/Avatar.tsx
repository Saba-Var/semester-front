import { blurredBackground } from 'public'
import type { AvatarProps } from './types'
import Image from 'next/image'

const Avatar: React.FC<AvatarProps> = ({
  sharedStyles,
  avatarStyles,
  blurStyles,
  src,
}) => {
  return (
    <>
      {src ? (
        <div className={`w-32 h-32 relative ${avatarStyles} ${sharedStyles}`}>
          <Image src={src} alt='user avatar' layout='fill' />
        </div>
      ) : (
        <div
          className={`w-32 h-32 backdrop-blur-md blur-md ${blurStyles} ${sharedStyles}`}
          style={{
            backgroundImage: `url(${blurredBackground.src})`,
          }}
        ></div>
      )}
    </>
  )
}

export default Avatar
