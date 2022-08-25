import './App.css';
import About from "./components/about/about.js";
import Header from "./components/header/header"

function App() {
  return (
    <div className="App">
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div className="sections">
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
