import React from "react";
import Typical from "react-typical";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Contact.css";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="contact-container" id={props.id || ""}>
      <ScreenHeading title={"Contact"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical loop={Infinity} steps={["Get in Touch 😎", 1000]} />
          </h2>
          <div className="contact-description">
            <div className="linkedin">
              <span className="linkedin-description">Linkedin: </span>
              <a href="https://www.linkedin.com/in/semin-yoo/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>

            <div className="email">
              <span className="email-description">
                Email: sarah0727@berkeley.edu{" "}
              </span>
            </div>

            <div className="contact">
              <a href="resume.pdf" download="Semin Yoo.pdf">
                <button className="btn highlighted-btn">Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
