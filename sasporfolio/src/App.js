import './App.css';
import About from "./components/about/about.js";
import Header from "./components/header/header";
import Projects from "./components/projects/proj";
import Res from './components/resume/resume';
import Footer from "./components/footer/footer";
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <div className="sections">
        <Header />
        <About />
        <Res />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
