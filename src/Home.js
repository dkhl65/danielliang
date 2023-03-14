import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="content">
      <h1>About</h1>
      <p>
        Welcome to my portfolio. From experimental passion projects to work for
        school projects, I've had the opportunity to create a variety of
        projects for this dynamic industry. I thrive on creative challenges and
        enjoy building strong relationships along the way. Explore my work, and
        contact me directly to learn more.
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} size="xl" />
        &nbsp;dan.liang@mail.utoronto.ca
      </p>
    </div>
  );
}

export default Home;
