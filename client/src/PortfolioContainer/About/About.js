import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./About.css";

export default function About(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "   Hi! I am Semin Yoo, a developer and UI/UX desginer. I enjoy bridging the gap between design and development. My diverse background - ranging from fashion to computer science - allows me to employ multidisciplinary approach to problem solving. \n\n   I also strive to adapt novel, uprising technologies. My main focus these days is building accessible blockchain products to lower the entry-barrier in crypto/blockchain world.",
    highlights: {
      bullets: ["Java", "Python", "Figma", "React.js"],
      heading: "Here are few technologies I’ve been working with recently:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-container screen-container" id={props.id || ""}>
      <div className="about-parent">
        <ScreenHeading title={"About"} />
        <div className="about-card">
          <div className="about-profile"></div>
          <div className="about-details">
            <span className="about-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
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
