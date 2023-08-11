import { CustomButtonProps } from './types'

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'primary-btn',
  onClick = () => {},
  disabled = false,
  styles = '',
  children,
  title,
  ...props
}) => {
  return (
    <button
      className={`${styles} ${type} ${disabled ? 'disabled-btn' : ''}`}
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
