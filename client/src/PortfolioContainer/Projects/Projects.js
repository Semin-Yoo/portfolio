import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

const Projects = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ProjectsHeading = (props) => {
    return (
      <div className="projects-heading">
        <div className="projects-main-heading">
          <div className="heading-bullet"> </div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="projects-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="projects-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="about-options">
          <span>{props.button ? props.button : ""}</span>
        </div>
      </div>
    );
  };

  const projectsBullets = [
    { label: "Programming", logoSrc: "coding.png" },
    { label: "Blockchain", logoSrc: "blockchain.png" },
    { label: "UI / UX", logoSrc: "design.png" },
  ];

  const programmingDetails = [
    {
      title: "TileWorld",
      duration: { fromDate: "Jul 2021", toDate: "Aug 2021" },
      description:
        "Designed and implemented 2D-tile based world exploration engine. User can explore by walking around and interacting with objects in that world.",
      subHeading: "Java, JavaScript",
      button: (
        <div className="project-options">
          <a href="https://sumptuous-lily-ba3.notion.site/BYOW-c679671526ea43f4a2237fe6ef68f38d">
            <button className="btn primary-btn">View Details</button>
          </a>
        </div>
      ),
    },

    {
      title: "Gitlet",
      duration: { fromDate: "Nov 2020", toDate: "Jul 2021" },
      description:
        "Implemented a version-control system that mimics some of the features of Git. ",
      subHeading: "Java",
    },

    {
      title: "Deque",
      duration: { fromDate: "Sep 2020", toDate: "Oct 2020" },
      description:
        "Implemented deque API (LinkedListDeque, ArrayListDeque) and used it to implement the Karplus-Strong algorithm to synthesize a guitar string sound.",
      subHeading: "Java",
    },

    {
      title: "SAT Score Report Generator",
      duration: { fromDate: "Jun 2021", toDate: "Aug 2021" },
      description:
        "Developed auto-grading + score-analysis report generator for SAT. ",
      subHeading: "Python",
    },
  ];

  const UIUXdetails = [
    {
      title: "Class Z",
      duration: { fromDate: "Jul 2021", toDate: "Aug 2021" },
      description:
        "Enhanced UI/UX of Class Z, a learning platform that provides live session service. Designed application pages for practitioners.",
      subHeading: "Figma",
      button: (
        <div className="project-options">
          <a href="https://seminyoo.notion.site/Class-Z-84456396891a46c4a4b5aed2b355577d">
            <button className="btn primary-btn">View Details</button>
          </a>
        </div>
      ),
    },
  ];

  const projectsDetails = [
    <div className="projects-screen-container" key="Programming">
      {programmingDetails.map((programmingDetails, index) => (
        <ProjectsHeading
          key={index}
          heading={programmingDetails.title}
          subHeading={programmingDetails.subHeading}
          description={programmingDetails.description}
          fromDate={programmingDetails.duration.fromDate}
          toDate={programmingDetails.duration.toDate}
          button={programmingDetails.button}
        />
      ))}
    </div>,

    <div className="projects-screen-container" key="Blockchain">
      <div className="experience-container">
        <ProjectsHeading
          heading={"UNICEF X Blockchain@Berkeley"}
          subHeading={"UI/UX, Frontend"}
          fromDate={"Aug 2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="projects-description-text">
            Currently developing Satchel, a crowdfunding platform that banks
            underbanked communities that lack access to stable financial
            climates but have internet access.
          </span>
        </div>
        <div className="experience-description">
          <span className="projects-description-text1">
            - $60,000 project co-funded by Compound and UNICEF.
          </span>
          <br />
          <span className="projects-description-text1">
            - combats hyperinflation and economic distrust by giving users
            banking functionality with the use of DAI.
          </span>
          <br />
          <span className="projects-description-text1">
            - designed and developed Loan-Request Page for community members /
            Token-Balance Page for Schools.
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ProjectsHeading
          heading={"Humanitarian Aid X Blockchain@Berkeley"}
          subHeading={"UI/UX"}
          fromDate={"Dec 2020"}
          toDate={"Aug 2021"}
        />
        <div className="experience-description">
          <span className="projects-description-text">
            Developed humanitarian-aid distribtion platform, which allows
            direct-cash-transfer via ethereum.
          </span>
        </div>
        <div className="experience-description">
          <span className="projects-description-text1">
            - performed User Research to develop a flow chart for each party -
            donor, beneficiary, vendor.
          </span>
          <br />
          <span className="projects-description-text1">
            - desigined pages for donors and beneficiaries via figma.
          </span>

          <div className="projects-options">
            <a href="https://seminyoo.notion.site/Blockchain-X-Humanitarian-Aid-cdf8def2c7d1470ea09f513c1ed0244c">
              <button className="btn primary-btn">View Details</button>
            </a>
          </div>
        </div>
      </div>
    </div>,

    <div className="projects-screen-container" key="UI / UX">
      {UIUXdetails.map((UIUXdetails, index) => (
        <ProjectsHeading
          key={index}
          heading={UIUXdetails.title}
          subHeading={UIUXdetails.subHeading}
          description={UIUXdetails.description}
          fromDate={UIUXdetails.duration.fromDate}
          toDate={UIUXdetails.duration.toDate}
          button={UIUXdetails.button}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: {
        transform: "translateY(" + index * offsetHeight * -1.35 + "px)",
      },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return projectsBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Projects/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getProjectsScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="projects-details-carousal"
      >
        {projectsDetails.map((ProjectDetail) => ProjectDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-content">
        <ScreenHeading title={"Projects"} />
        <div className="projects-card">
          <div className="projects-bullets">
            <div className="bullets-container">
              <div className="bullets-icon"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="projects-bullets-details">{getProjectsScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
