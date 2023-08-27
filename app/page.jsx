import { HeroSection } from "@components/HeroSection"
import { Feeds } from '@components/Feeds'


const Home = () => {
  return(
    <>
      <section className="text-center relative py-5">
        <HeroSection />
      </section>

      <section className="text-center relative py-5">
        <Feeds />
      </section>
    </>
  )
}

export default Home