import Header from "./components/shared/header/Header";
import "./App.css";
import Home from "./components/shared/home/Home";
import About from "./components/shared/about/About";
import Skills from "./components/shared/skills/Skills";
import Services from "./components/shared/services/Services";
import Qualification from "./components/shared/qualification/Qualification";
import Contact from "./components/shared/contact/Contact";
//  import Projects from "./components/shared/portfolio/Projects";
import PortfolioSection from "./components/shared/portfolio/Portfolio";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <PortfolioSection />
                {/* <Projects/> */}
                <Contact />
            </main>
        </>
    );
}

export default App;
