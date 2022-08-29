import './App.css';
import About from "./components/about/about.js";
import Header from "./components/header/header";
import Projects from "./components/projects/proj";
import Res from './components/resume/resume';

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
      </div>
    </div>
  );
}

export default App;
