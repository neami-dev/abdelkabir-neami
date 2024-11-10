import Header from "./components/shared/header/Header"
import './App.css'
import Home from "./components/shared/home/Home"
import About from "./components/shared/about/About"

function App() {
  

  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App
