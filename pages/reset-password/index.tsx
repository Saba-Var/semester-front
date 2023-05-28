import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, NewPasswordForm } from 'components'
import { GetStaticProps, NextPage } from 'next'
import { useTranslate } from 'hooks'

const ResetPassword: NextPage = () => {
  return (
    <AuthWrapper page='reset-password'>
      <>
        <p className='mb-10 text-gray-800 text-base lg:text-lg text-center'>
          {useTranslate('reset:new-password-instruction')}
        </p>

        <NewPasswordForm />
      </>
    </AuthWrapper>
  )
}

export default ResetPassword

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'inputs',
        'reset',
        'auth',
      ])),
    },
  }
}
