import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AuthWrapper, ResetPasswordRequestForm } from 'components'
import { GetStaticProps, NextPage } from 'next'
import { useTranslate } from 'hooks'

const RequestEmail: NextPage = () => {
  return (
    <AuthWrapper page='reset'>
      <>
        <p className='mb-10 text-gray-800 text-base lg:text-lg text-center'>
          {useTranslate('reset:reset-instruction')}
        </p>

        <ResetPasswordRequestForm />
      </>
    </AuthWrapper>
  )
}

export default RequestEmail

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'inputs',
        'common',
        'reset',
        'auth',
      ])),
    },
  }
}
