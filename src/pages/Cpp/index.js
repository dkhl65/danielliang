import React from "react";
import TableOfContents from "../TableOfContents";

import CityMap from "./CityMap";
import RemoteControlRobot from "./RemoteControlRobot";
import Sumo from "./Sumo";
import Reversi from "./Reversi";
import Simon from "./Simon";
import LineFollowingRobot from "./LineFollowingRobot";
import IRProximitySensor from "./IRProximitySensor";
import IRRemote from "./IRRemote";
import Wikispace from "./Wikispace";

function Cpp() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>C/C++</h1>
        <p>
          This programming language is similar to C++. Is used it in grade 11
          and 12 for microcontroller projects. It was also a required course for
          my university program's Computer Fundamentals course. This language is
          simple and close to hardware, which means the language is
          straightforward and does not have many behind the scenes processing.
          Below are projects I made with the C language.
        </p>
        <CityMap />
        <RemoteControlRobot />
        <Sumo />
        <Reversi />
        <LineFollowingRobot />
        <Simon />
        <IRProximitySensor />
        <IRRemote />
        <Wikispace />
      </div>
    </div>
  );
}

export default Cpp;
