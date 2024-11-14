import Header from "./components/shared/header/Header"
import './App.css'
import Home from "./components/shared/home/Home"
import About from "./components/shared/about/About"
import Skills from "./components/shared/skills/Skills"

function App() {
  

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
      </main>
    </>
  )
}

export default App
