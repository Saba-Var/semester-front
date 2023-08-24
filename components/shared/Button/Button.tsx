import { LoadingIcon } from 'components'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  showLoadingIndicator = false,
  stylesType = 'primary-btn',
  onClick = () => {},
  fullWidth = false,
  disabled = false,
  type = 'button',
  styles = '',
  title = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`h-12.5 flex items-center justify-center transition-all ${
        fullWidth ? 'w-full' : ''
      } ${styles} ${stylesType} ${disabled ? 'disabled-btn' : ''}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {title && <p>{title}</p>}

      {children}

      {disabled && showLoadingIndicator && (
        <span className='w-5 h-5'>
          <LoadingIcon styles='h-5 w-5' />
        </span>
      )}
    </button>
  )
}

export default Button
