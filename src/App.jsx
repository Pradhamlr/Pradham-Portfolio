import Navbar from "./components/Navbar"
import Contact from "./section/Contact"
import FeatureCards from "./section/FeatureCards"
import Footer from "./section/Footer"
import Hero from "./section/Hero"
import ShowcaseSection from "./section/ShowcaseSection"
import TechStack from "./section/TechStack"

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <Contact />
        <Footer />
    </>
  )
}

export default App