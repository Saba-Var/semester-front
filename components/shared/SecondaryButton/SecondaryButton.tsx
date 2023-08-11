import { ButtonProps } from 'types'

const SecondaryButton: React.FC<ButtonProps> = ({
  onClick = () => {},
  disabled = false,
  styles = '',
  children,
  title,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      {...props}
      type='button'
      className={`rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${styles}`}
    >
      {title}
      {children}
    </button>
  )
}

export default SecondaryButton
