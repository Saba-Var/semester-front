import useAvatarItem from './useAvatarItem'
import { AvatarItemProps } from './types'
import Image from 'next/image'

const AvatarItem: React.FC<AvatarItemProps> = ({
  collectionItem,
  user,
  form,
}) => {
  const { avatarSrc } = useAvatarItem(collectionItem, user)

  return (
    <div
      onClick={() => {
        form.setValue('style', avatarSrc)
      }}
      className='relative'
    >
      <Image
        src={avatarSrc}
        alt={collectionItem.title}
        height={70}
        width={70}
      />
    </div>
  )
}

export default AvatarItem
