import { blurredBackground } from 'public'
import type { AvatarProps } from './types'

const AvatarImage: React.FC<AvatarProps> = ({
  containerClassName,
  sharedClassName,
  avatarClassName,
  blurClassName,
  children,
  src,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 ${containerClassName}`}
    >
      {src ? (
        <div
          className={`w-32 h-32 relative pointer-events-none ${avatarClassName} ${sharedClassName}`}
        >
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} className='rounded-xl' alt='user avatar' />
        </div>
      ) : (
        <div
          className={`w-32 h-32 backdrop-blur-md opacity-90 blur-md pointer-events-none ${blurClassName} ${sharedClassName}`}
          style={{
            backgroundImage: `url(${blurredBackground.src})`,
          }}
        ></div>
      )}

      {children}
    </div>
  )
}

export default AvatarImage
