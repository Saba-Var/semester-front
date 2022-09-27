import { HeroSection, FeatureSection, NewsLetter, Footer } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Home
