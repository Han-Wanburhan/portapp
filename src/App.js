import NavBar from "./NavBar";
import Home from "./components/Home";
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
    </div>
  );
}
export default App;
