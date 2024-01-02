import "./Project.css";
import WireFrame_IMG from "../image/Wireframe.png";
import Gintuay_IGM from "../image/Gintuay.png";

import Projects from "./component/Projects";
const projectbodys = [
  {
    ID: 1,
    ProjectName: "Front-end Builder",
    Detail: `Front-end Builder is a low-code tool designed for building front-end
      web pages swiftly, enabling users to create and customize web
      interfaces efficiently. It enhances convenience in API testing,
      providing a clearer visualization of API results.`,
    img: Gintuay_IGM,
  },
  {
    ID: 2,
    ProjectName: "WireFrame To HTML",
    Detail: `This project incorporates a system that leverages image processing
            technology to read images and generate HTML files with processed
            images. The system utilizes the Yolov5 and Yolov7 models for object
            detection on images and is proficient in converting images in
            various formats such as JPEG and PNG into HTML code.`,
    img: WireFrame_IMG,
  },
  {
    ID: 3,
    ProjectName: "Gintuay.com",
    Detail: `This application is a web-based platform dedicated to a Food
            Delivery System, developed using HTML, CSS, and ASP.NET
            technologies. The system is designed to facilitate seamless and
            efficient food ordering and delivery processes.`,
    img: Gintuay_IGM,
  },
];

function Project() {
  return (
    <div className="Project-Conatainer" id="project">
      <div className="Project-Container-Top">
        <h1 style={{ textTransform: "uppercase" }}>Projects</h1>
        <span className="Top-h3">
          Collection of personal and academic projects spanning diverse
          subjects, including Image Processing, Web Application development, and
          Mobile Application
        </span>
      </div>
      {projectbodys.map((project) => (
        <Projects key={project.ID} project={project} />
      ))}
    </div>
  );
}

export default Project;
