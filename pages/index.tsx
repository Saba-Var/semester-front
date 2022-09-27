import { HeroSection, FeatureSection, NewsLetter } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <NewsLetter />
    </>
  )
}

export default Home
