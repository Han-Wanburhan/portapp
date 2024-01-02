import Buttons from "../Button";
const Projects = (project) => {
  return (
    <div className="Project-Container-Bottom">
      <div className="Project-Container-Bottom-Left">
        <img src={project.project.img} alt="Project" />
      </div>
      <div className="Project-Container-Bottom-Right">
        <h2>{project.project.ProjectName}</h2>
        <span className="SpanContent">{project.project.Detail}</span>
        <br />
        <br />
        <br />
        <Buttons children="Detail" value={project.project.ID} />
      </div>
    </div>
  );
};

export default Projects;
