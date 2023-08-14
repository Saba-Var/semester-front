import useAvatarItem from './useAvatarItem'
import { AvatarItemProps } from './types'
import Image from 'next/image'

const AvatarItem: React.FC<AvatarItemProps> = ({
  collectionItem,
  properties,
  fieldName,
  value,
  user,
  form,
}) => {
  const { avatarSrc, currentFieldValue } = useAvatarItem({
    collectionItem,
    properties,
    fieldName,
    value,
    user,
    form,
  })

  return (
    <div
      onClick={() => {
        if (fieldName === 'style') {
          form.reset()
        }
        form.setValue(fieldName, value)
      }}
      className={`text-sm select-none cursor-pointer border-transparent font-medium justify-center flex items-center leading-6 text-gray-900`}
    >
      <div
        className={`relative transition-all rounded-xl hover:ring-8 ring-0 flex items-center p-2 ${
          currentFieldValue === value && '!ring-8'
        }`}
      >
        <Image
          alt={collectionItem.title}
          className='rounded-xl'
          draggable={false}
          src={avatarSrc}
          height={115}
          width={115}
        />
      </div>
    </div>
  )
}

export default AvatarItem
