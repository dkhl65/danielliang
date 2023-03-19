import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  const location = useLocation().pathname;

  return (
    <div className="navbar">
      <Link to="/">
        <div className={location === "/" ? "myname selectedpage" : "myname"}>
          Daniel Liang
        </div>
      </Link>
      <div className="pages">
        <Link to="/webdevelopment">
          <div className={location === "/webdevelopment" ? "selectedpage" : ""}>
            Web Development
          </div>
        </Link>
        <Link to="/cpp">
          <div className={location === "/cpp" ? "selectedpage" : ""}>C/C++</div>
        </Link>
        <Link to="/java">
          <div className={location === "/java" ? "selectedpage" : ""}>Java</div>
        </Link>
        <Link to="/python">
          <div className={location === "/python" ? "selectedpage" : ""}>
            Python
          </div>
        </Link>
        <Link to="/verilog">
          <div className={location === "/verilog" ? "selectedpage" : ""}>
            Verilog
          </div>
        </Link>
      </div>
      <div className="external">
        <div>
          <a href="mailto:dan.liang@mail.utoronto.ca">
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/daniel-liang-957960149/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
        <div>
          <a href="https://github.com/dkhl65" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
