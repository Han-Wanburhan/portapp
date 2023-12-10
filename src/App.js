import NavBar from "./NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";
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
      <div className="App-Project">
        <Project />
      </div>
    </div>
  );
}
export default App;
