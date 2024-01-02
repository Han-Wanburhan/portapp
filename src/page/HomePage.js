import NavBar from "../NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Project from "../components/Project";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
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
      <div className="App-Contact">
        <div className="App-Contact-Content" id="content">
          <br></br>
          <br></br>
          <h2>Han Wanburhan</h2>
          <span>
            I'm passionate about Software Engineering, Machine Learning,
            Artificial Intelligence, and DevOps. I'm proactive in developing
            relevant skills and knowledge and committed to applying enthusiasm
            and dedication to contribute effectively 🚀
          </span>
          <br></br>
          <hr style={{ width: "100%", border: "1px solid #ccc" }} />
          <br></br>
          <div className="social_contact">
            <a
              href="https://www.facebook.com/HanWanburhan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={70} color="#ffffff" />
            </a>
            <a
              href="https://twitter.com/Han_Wanburhan"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare size={70} color="#ffffff" />
            </a>
            <a
              href="https://github.com/Han-Wanburhan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size={70} color="#ffffff" />
            </a>
            <a
              href="https://linkedin.com/in/wanburhan-wae-useng"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={70} color="#ffffff" />
            </a>

            <a
              href="mailto:Wanburhan.W@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoIosMail size={70} color="#ffffff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
