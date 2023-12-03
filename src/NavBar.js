import "./NavBar.css";
import image from "./image/Han.jpg";
function NavBar() {
  return (
    <div className="NavBar-Container">
      <div className="NavBar-Left">
        <img src={image} alt="It's Me" />
        <div className="NavBar-Left-Name">
          <h2 className="Myname-h2">Han Wanburhan</h2>
        </div>
      </div>
      <div className="NavBar-Right">
        <h2>HOME</h2>
        <h2>ABOUT</h2>
        <h2>PROJECT</h2>
        <h2>CONTACT</h2>
      </div>
    </div>
  );
}

export default NavBar;
