import NavBar from "./NavBar";
import Home from "./page/Home";
import About from "./page/About";
import "./App.css";
function App() {
  return (
    <div className="App-Container">
      <div className="App-NavBar">
        <NavBar />
      </div>
      <div className="App-Home">
        <Home />
      </div>
      <div className="App-About">
        <About />
      </div>
    </div>
  );
}
export default App;
