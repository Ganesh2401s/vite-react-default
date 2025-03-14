import image from "./assets/rohan2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer () {
    return(
        <div className="footerContainer" id="footer">
            <div className="getInTouch">
                <div className="imageTile">
                    <div className="profileContainer">
                        <img src={image} alt="rohan_image" />
                    </div>
                    <div className="ownerName">
                        <h4>Rohan Singh</h4>
                    </div>

                </div>
                <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis, voluptatem molestiae nisi tenetur totam nemo beatae officia amet odit!</p>

                </div>
                <div className="btnAndSocials">
                    <div className="getInTouchBtn">
                        <button type="button">Get In Touch </button>
                    </div>

                    <div className="socialMedia">
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

            </div>
            <div className="contacts">
                <h3>Contact Me</h3>
                <div className="gmail">
                    <h5>Gmail</h5>
                    <p>rohansingh70112@gmail.com</p>

                </div>
                <div className="phoneNumber">
                    <h5>Phone Number:</h5>
                    <p>7011288012</p>

                </div>
                <div className="address">
                    <h5>College Address</h5>
                    <address>
                        <pre>Netaji Subhas University Of Technology, </pre>
                        <pre>Azad Hind Fauj Marg, Dwarka Sector-3,</pre>
                        <pre>Dwarka, Delhi, 110078</pre>
                    </address>
                </div>


            </div>
            <div className="copyright">
                <p>Copyright &#169; Rohan Singh | Designed & Developed by 
                 <span> Ganesh Singh</span></p>
            </div>



        </div>
    );
}
export default Footer