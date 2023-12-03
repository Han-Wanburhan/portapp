import "./NavBar.css";
import image from "./image/Han.jpg";
import { Link, Element } from "react-scroll";
function NavBar() {
  return (
    <div className="NavBar-Container">
      <div className="NavBar-Left">
        <img src={image} alt="It's Me" />
        <div className="NavBar-Left-Name">
          <Link to="home" smooth={true} duration={1000} offset={-120}>
            <h2 className="Myname-h2">Han Wanburhan</h2>
          </Link>
        </div>
      </div>
      <div className="NavBar-Right">
        <div className="NavBar-Right-Content">
          <Link to="home" smooth={true} duration={1000} offset={-120}>
            <h2>HOME</h2>
          </Link>
        </div>
        <div className="NavBar-Right-Content">
          <Link to="about" smooth={true} duration={1000} offset={-100}>
            <h2>ABOUT</h2>
          </Link>
        </div>
        <div className="NavBar-Right-Content">
          <Link to="about" smooth={true} duration={1000} offset={-100}>
            <h2>PROJECT</h2>
          </Link>
        </div>
        <div className="NavBar-Right-Content">
          <Link to="about" smooth={true} duration={1000} offset={-100}>
            <h2>CONTACT</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
