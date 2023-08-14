export type ChangeAvatarModalProps = {
  closeHandler: () => void
  isOpen: boolean
}

export type PropertiesList = {
  propertyName: string
  values: string[] | number[]
}[]

export type CollectionItem = {
  collection: Style<any>
  title: string
}
