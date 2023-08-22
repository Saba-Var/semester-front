import useEmailActivation from './useEmailActivation'
import type { EmailActivationProps } from './types'
import { SuccessModal, ErrorModal } from 'components'

const EmailActivation: React.FC<EmailActivationProps> = ({ profileForm }) => {
  const {
    setShowActivationSuccessModal,
    showActivationSuccessModal,
    setShowActivationFailModal,
    showActivationFailModal,
    t,
  } = useEmailActivation(profileForm)

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

      <ErrorModal
        description={t('email_change_failed_instructions')}
        setShowModal={setShowActivationFailModal}
        showModal={showActivationFailModal}
        title={t('email_change_failed')}
      />
    </>
  )
}

export default EmailActivation
