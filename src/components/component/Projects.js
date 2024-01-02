import Buttons from "../Button";
import AbSk from "../AbSk";
import "./Projects.css";
const Projects = (project) => {
  return (
    <div className="Project-Container-Bottom">
      <div className="Project-Container-Bottom-Left">
        <img
          src={project.project.img}
          alt="Project"
          style={{ width: "37vw", height: "auto" }}
        />
      </div>
      <div className="Project-Container-Bottom-Right">
        <h2>{project.project.ProjectName}</h2>
        <span className="SpanContent">{project.project.Detail}</span>
        <br />
        <br />
        <div className="used-stack">
          {project.project.staked.map((item, index) => (
            <AbSk key={index} children={item} />
          ))}
        </div>
        <br />

        <div className="button-link">
          <Buttons
            children="Github"
            value={project.project.ID}
            href={project.project.github_link}
          />
          <Buttons
            children="Youtube"
            value={project.project.ID}
            href={project.project.youtube_link}
            bgcolor="#e61919"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
