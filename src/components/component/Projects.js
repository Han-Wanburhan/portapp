import Buttons from "../Button";
import AbSk from "../AbSk";
import "./Projects.css";
const Projects = (project) => {
  const staked = project.project.stackUsed;

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
        <div className="stack-used">
          {staked.map((item, index) => (
            <AbSk key={index} children={item} />
          ))}
        </div>

        <br />
        <br />

        <div className="button-link">
          <Buttons
            children="Github"
            value={project.project.ID}
            bgcolor="#222"
            href={project.project.github_link}
          />
          <Buttons
            children="Youtube"
            value={project.project.ID}
            bgcolor="#dc0404"
            href={project.project.youtube_link}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
