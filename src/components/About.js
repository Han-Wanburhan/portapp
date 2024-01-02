import Buttons from "./Button";
import AbSk from "./AbSk";
import "./About.css";
import Pdf from "../Wanburhan_CV.pdf";
function About() {
  return (
    <div className="About-Conatainer" id="about">
      <div className="About-Conatainer-Top">
        <h1>ABOUT ME</h1>
        <p>
          🎓 I'm a student at King Mongkut's Institute of Technology
          Ladkrabang🎓
          <br />| Faculty of Engineering (KMITL) ⚙️ | Major: Computer
          Engineering 💻|
        </p>
      </div>
      <div className="About-Conatainer-Bottom">
        <div className="About-Conatainer-Bottom-Left">
          <h2>Get to know me!</h2>
          <p>
            Hello! I'm Han, a Computer Engineering student at King Mongkut's
            Institute of Technology Ladkrabang (KMITL) in Bangkok. I'm
            passionate about Software Engineering, Machine Learning, Artificial
            Intelligence, and DevOps. I'm proactive in developing relevant
            skills and knowledge and committed to applying enthusiasm and
            dedication to contribute effectively 🚀
          </p>
          <div className="About-Content-Button">
            <Buttons href={Pdf} children="Resume!" bgcolor="#222" />
          </div>
        </div>
        <div className="About-Conatainer-Bottom-Right">
          <h2>Abilities</h2>
          <div className="About-Conatainer-Bottom-Right-Abilities">
            <AbSk children="Web Developer (Full Stack)." />
            <AbSk children="Image Processing." />
            <AbSk children="Cloud." />
            <AbSk children="Mobile Developer (Studying)." />
          </div>
          <h2>Skiils</h2>
          <div className="About-Conatainer-Bottom-Right-Skills">
            <AbSk children="Python" />
            <AbSk children="JavaScript" />
            <AbSk children="HTML" />
            <AbSk children="SQL" />
            <AbSk children="PHP" />
            <AbSk children="React" />
            <AbSk children="Robot Framework" />
            <AbSk children="Flask" />
            <AbSk children="Git" />
            <AbSk children="AWS" />
            <AbSk children="GCP" />
            <AbSk children="Docker" />
            <AbSk children="Jenkins" />
            <AbSk children="GoCD" />
            <AbSk children="Terraform" />
            <AbSk children="Figma" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
