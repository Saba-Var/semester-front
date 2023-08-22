import useEmailActivation from './useEmailActivation'
import type { EmailActivationProps } from './types'
import { SuccessModal } from 'components'

const EmailActivation: React.FC<EmailActivationProps> = ({ profileForm }) => {
  const { setShowActivationSuccessModal, showActivationSuccessModal, t } =
    useEmailActivation(profileForm)

  return (
    <>
      <SuccessModal
        setSuccess={setShowActivationSuccessModal}
        title={t('email_changed_successfully')}
        show={showActivationSuccessModal}
        showOnlyCloseButton
        linkAction={false}
        closeWithOverlay
      />
    </>
  )
}

export default EmailActivation
