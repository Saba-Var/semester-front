import useAvatarItem from './useAvatarItem'
import { AvatarItemProps } from './types'
import Image from 'next/image'

const AvatarItem: React.FC<AvatarItemProps> = ({
  collectionItem,
  fieldName,
  user,
  form,
}) => {
  const { avatarSrc, currentFieldValue } = useAvatarItem(
    collectionItem,
    user,
    fieldName,
    form
  )

  return (
    <div
      onClick={() => {
        form.setValue(fieldName, collectionItem.title)
      }}
      className={`text-sm cursor-pointer border-transparent font-medium justify-center flex items-center leading-6 text-gray-900`}
    >
      <div
        className={`relative flex items-center p-2 ${
          currentFieldValue === collectionItem.title &&
          'ring-offset-2 rounded-xl ring-4'
        }`}
      >
        <Image
          alt={collectionItem.title}
          className='rounded-xl'
          src={avatarSrc}
          height={115}
          width={115}
        />
      </div>
    </div>
  )
}

export default AvatarItem
