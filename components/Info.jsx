import React from "react";

export default function Info() {
  return (
    <div className="info-container">
      <img className="profile-pic" src="images/profile-pic.png" />
      <div className="header">
        <h1>Laura Smith</h1>
        <h3 className="role">Front-end Developer</h3>
        <h4 className="website">laurasmith.website</h4>
      </div>
      <div className="wrapper btn-container">
        <button className="btn btn--light">
          <img src="images/mail.svg" />
          Email
        </button>
        <button className="btn btn--dark">
          <img src="images/linkedin.svg" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
