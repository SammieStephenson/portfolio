import './App.css';
import About from "./components/about/about.js";
import Header from "./components/header/header";
import Projects from "./components/projects/proj";
import Res from './components/resume/resume';
import Footer from "./components/footer/footer";
import Skills from './components/skills/skills';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
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
