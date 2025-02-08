import Header from "./components/shared/header/Header"
import './App.css'
import Home from "./components/shared/home/Home"
import About from "./components/shared/about/About"
import Skills from "./components/shared/skills/Skills"
import Services from "./components/shared/services/Services"
import Qualification from "./components/shared/qualification/Qualification"
import Contact from "./components/shared/contact/Contact"
import Work from "./components/shared/work/Work"

function App() {
  

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Contact/>
      </main>
    </>
  )
}

export default App
