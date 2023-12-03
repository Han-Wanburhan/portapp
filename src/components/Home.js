import "./Home.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Home() {
  return (
    <div className="Home-Conatainer">
      <div className="Home-side">
        <div className="Home-side-Social">
          <FaFacebookSquare size={70} />
        </div>
        <div className="Home-side-Social">
          <FaTwitterSquare size={70} />
        </div>
        <div className="Home-side-Social">
          <FaGithubSquare size={70} />
        </div>
        <div className="Home-side-Social">
          <FaLinkedin size={70} />
        </div>
        <div className="Home-side-Social">
          <IoIosMail size={70} />
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
          <a href="*">
            <button class="button-31">PROJECT</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
