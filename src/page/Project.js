import image from "../image/Han.jpg";
function Project() {
  return (
    <div className="Project-Conatainer">
      <div className="Project-Container-Top">
        <h1>Project!</h1>
        <span>
          collection of personal and academic projects spanning diverse
          subjects, including Image Processing, Web Application development, and
          Mobile Application
        </span>
      </div>
      <div className="Project-Container-Bottom">
        <div className="Project-Container-Bottom-Left">
          <img src={image} />
        </div>
        <div className="Project-Container-Bottom-Right">
          <h2>Project</h2>
          <span></span>
          <button>dsdsds</button>
        </div>
      </div>
    </div>
  );
}

export default Project;
