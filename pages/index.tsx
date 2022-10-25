import { HeroSection, FeatureSection, NewsLetter, Footer } from 'components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { NextPage, GetStaticProps } from 'next'
import { useHome } from 'hooks'

const Home: NextPage = () => {
  const { blurContent, setBlurContent } = useHome()

  return (
    <>
      <HeroSection blurContent={blurContent} setBlurContent={setBlurContent} />
      <div
        onClick={() => blurContent && setBlurContent(false)}
        className={`${blurContent ? 'blur-[2.4px]' : 'blur-0'} md:blur-0`}
      >
        <FeatureSection />
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['auth', 'common', 'home'])),
    },
  }
}
