import React from "react";
import TableOfContents from "../TableOfContents";

import BlockchainSimulator from "./BlockchainSimulator";
import Pathfinder from "./Pathfinder";
import Pokemon from "./Pokemon";
import ClashOfClans from "./ClashOfClans";
import OldFiles from "./OldFiles";

function WebDevelopment() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Web Development</h1>
        <p>
          In Grade 4 and 5 (2008-2010), I learned HTML and JavaScript using
          books I borrowed from the library. That was my first experience with
          coding. I did not use JavaScript again until my PEY Co-op at Analog
          Devices (2020-2021). JavaScript has changed a lot since my first
          encounter with it. Now there is ES6 and modern frameworks such as
          Angular JS and libraries such as jQuery. I continued using JavaScript
          and learned React JS during my fourth year of university.
        </p>
        <BlockchainSimulator />
        <Pathfinder />
        <Pokemon />
        <ClashOfClans />
        <OldFiles />
      </div>
    </div>
  );
}

export default WebDevelopment;
