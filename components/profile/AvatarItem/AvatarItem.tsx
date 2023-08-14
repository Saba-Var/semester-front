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
      className={`text-sm select-none transition-all cursor-pointer rounded-xl hover:ring-8 ${
        currentFieldValue === value && '!ring-8'
      } border-transparent w-32 h-32 font-medium justify-center flex items-center leading-6 text-gray-900`}
    >
      <div className={`relative flex items-center`}>
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
