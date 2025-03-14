import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Navbar() {
  return (
    <div id="navBar" className="navBar">
      <div className="listItems">
        <ul className="navListItems">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>{" "}
          </li>
        </ul>
      </div>

      <div className="fontAwesomeIcons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      </div>
    </div>
  );
}
export default Navbar;
