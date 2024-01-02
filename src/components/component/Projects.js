import Buttons from "../Button";
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
        <br />
        <div className="button-link">
          <Buttons children="Github" value={project.project.ID} />
          <Buttons children="Youtube" value={project.project.ID} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
