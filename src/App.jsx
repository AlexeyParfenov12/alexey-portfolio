import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import TeachingPlaces from "./components/TeachingPlaces/TeachingPlaces"
import Technologies from "./components/Technologies/Technologies"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"

function App(){
  return (
    <>
    <Header />
    <main>
      <Hero />
      <TeachingPlaces />
      <Technologies />
      <Projects />
      <Footer />
    </main>
    </>
    
  )
}

export default App