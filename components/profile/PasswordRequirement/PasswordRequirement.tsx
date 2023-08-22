import { PasswordRequirementProps } from './types'

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
  isValid,
  title,
}) => {
  return (
    <li className='flex text-gray-500 items-center gap-2'>
      <div className={`text-base ${isValid ? 'text-green' : 'text-gray-400'}`}>
        &#9679;
      </div>
      <div
        className={`text-base ${isValid ? 'text-gray-700' : 'text-gray-400'}`}
      >
        {title}
      </div>
    </li>
  )
}

export default PasswordRequirement
