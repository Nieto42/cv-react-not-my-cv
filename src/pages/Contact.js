import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bordeaux</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0783098593">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié!");
                  }}
                >
                  {" "}
                  07 83 09 85 93
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="monmail@email.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Mail copié!");
                  }}
                >
                  {" "}
                  monemail@mail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
