import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LottieAnimation } from 'components'
import type { GetStaticProps, NextPage } from 'next'
import { PageNotFount } from 'public'
import { useTranslate } from 'hooks'
import Head from 'next/head'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta
          content='initial-scale=1.0, width=device-width'
          name='viewport'
          key='404'
        />
      </Head>

      <div className='flex flex-col h-screen items-center justify-center gap-6 sm:gap-2'>
        <div className=''>
          <LottieAnimation animationData={PageNotFount} />
        </div>

        <div className='flex flex-col gap-4 mx-8'>
          <div>
            <h2 className='text-4xl text-center font-bold tracking-tight text-gray-500 sm:text-5xl'>
              {useTranslate('404:title')}
            </h2>

            <p className='mt-3 sm:mt-5 text-xl sm:text-2xl text-center text-gray-500'>
              {useTranslate('404:description')}
            </p>
          </div>

          <Link href='/overview'>
            <a className='hover:underline mt-1 text-center text-xl text-gray-500 font-medium'>
              &larr; {useTranslate('404:link-text')}
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['404'])),
    },
  }
}
