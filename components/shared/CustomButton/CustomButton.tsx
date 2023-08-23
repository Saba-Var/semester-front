import { CustomButtonProps } from './types'

const CustomButton: React.FC<CustomButtonProps> = ({
  stylesType = 'primary-btn',
  onClick = () => {},
  disabled = false,
  styles = '',
  children,
  title,
  ...props
}) => {
  return (
    <button
      className={`${styles} ${stylesType} ${
        disabled ? 'disabled-btn' : ''
      } w-full h-12.5`}
      disabled={disabled}
      onClick={onClick}
      {...props}
      type='button'
    >
      {title}
      {children}
    </button>
  )
}

export default CustomButton
