import NavBar from "../NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import "./App.css";
const HomePage = () => {
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
};

export default HomePage;
