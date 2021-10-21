import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi! I'm <span className="highlighted-text">Semin Yoo,</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["Frontend Developer", 1000, "UI/UX Designer", 1000]}
                />
              </h1>
              <span className="profile-role-tagline">
                interested in crafting user-centric experiences.
              </span>
            </span>
          </div>

          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/semin-yoo/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
