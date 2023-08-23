import { CustomButtonProps } from './types'

const CustomButton: React.FC<CustomButtonProps> = ({
  stylesType = 'primary-btn',
  onClick = () => {},
  fullWidth = false,
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
      } h-12.5 transition-all ${fullWidth ? 'w-full' : ''}`}
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
