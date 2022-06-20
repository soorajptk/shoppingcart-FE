import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-Container">
        <div>
          <h3>lorem</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div>
          <h3>lorem</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <h3>lorem</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>

      <FontAwesomeIcon className="icons" icon={faFacebook} />
      <FontAwesomeIcon className="icons" icon={faInstagram} />
      <FontAwesomeIcon className="icons" icon={faTwitter} />
    </div>
  );
}

export default Footer;
