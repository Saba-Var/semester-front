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
      className={`text-sm select-none cursor-pointer border-transparent font-medium justify-center flex items-center leading-6 text-gray-900`}
    >
      <div
        className={`relative transition-all rounded-xl ring-0 flex items-center p-2 ${
          currentFieldValue === collectionItem.title && '!ring-8'
        }`}
      >
        <Image
          alt={collectionItem.title}
          className='rounded-xl'
          draggable={false}
          src={avatarSrc}
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default AvatarItem
