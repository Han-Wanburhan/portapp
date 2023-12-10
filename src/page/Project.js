import image from "../image/Han.jpg";
import "./Project.css";
import Buttons from "../components/Button";
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
      <div className="Project-Container-Bottom">
        <div className="Project-Container-Bottom-Left">
          <img src={image} />
        </div>
        <div className="Project-Container-Bottom-Right">
          <h2>Front-end Builder</h2>
          <span className="SpanContent">
            Front-end Builder is a low-code tool designed for building front-end
            web pages swiftly, enabling users to create and customize web
            interfaces efficiently. It enhances convenience in API testing,
            providing a clearer visualization of API results.
          </span>
          <br />
          <br />
          <br />
          <Buttons children="Detail" />
        </div>
      </div>
      <div className="Project-Container-Bottom">
        <div className="Project-Container-Bottom-Left">
          <img src={image} />
        </div>
        <div className="Project-Container-Bottom-Right">
          <h2>WireFrame To HTML</h2>
          <span className="SpanContent">
            This project incorporates a system that leverages image processing
            technology to read images and generate HTML files with processed
            images. The system utilizes the Yolov5 and Yolov7 models for object
            detection on images and is proficient in converting images in
            various formats such as JPEG and PNG into HTML code.
          </span>
          <br />
          <br />
          <br />
          <Buttons children="Detail" />
        </div>
      </div>
      <div className="Project-Container-Bottom">
        <div className="Project-Container-Bottom-Left">
          <img src={image} />
        </div>
        <div className="Project-Container-Bottom-Right">
          <h2>Gintuay.com</h2>
          <span className="SpanContent">
            This application is a web-based platform dedicated to a Food
            Delivery System, developed using HTML, CSS, and ASP.NET
            technologies. The system is designed to facilitate seamless and
            efficient food ordering and delivery processes.
          </span>
          <br />
          <br />
          <br />
          <Buttons children="Detail" />
        </div>
      </div>
    </div>
  );
}

export default Project;
