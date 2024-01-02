import "./Home.css";
import Buttons from "./Button";
import { Link } from "react-scroll";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Home() {
  return (
    <div className="Home-Conatainer" id="home">
      <div className="Home-side">
        <div className="Home-side-Social">
          <a
            href="https://www.facebook.com/HanWanburhan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={70} />
          </a>
        </div>
        <div className="Home-side-Social">
          <a
            href="https://twitter.com/Han_Wanburhan"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare size={70} />
          </a>
        </div>
        <div className="Home-side-Social">
          <a
            href="https://github.com/Han-Wanburhan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={70} />
          </a>
        </div>
        <div className="Home-side-Social">
          <a
            href="https://linkedin.com/in/wanburhan-wae-useng"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={70} />
          </a>
        </div>
        <div className="Home-side-Social">
          <a
            href="mailto:Wanburhan.W@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <IoIosMail size={70} />
          </a>
        </div>
      </div>
      <div className="Home-Content">
        <h1>HEY, MY NAME IS HAN</h1>
        <h3>
          🎓 I'm a student at King Mongkut's Institute of Technology
          Ladkrabang🎓
          <br />| Faculty of Engineering (KMITL) ⚙️ | Major: Computer
          Engineering 💻|
        </h3>
        <div className="Home-Content-Button">
          <Link to="project" smooth={true} duration={1000} offset={-100}>
            <Buttons children="PROJECT" bgcolor="#222" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
