import React from "react";
import TableOfContents from "../TableOfContents";

import BlockchainSimulator from "./BlockchainSimulator";
import Pathfinder from "./Pathfinder";
import OldFiles from "./OldFiles";

function WebDevelopment() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Web Development</h1>
        <p>
          In grade 4 and 5, I learned HTML and JavaScript using books I borrowed
          from the library. That was my first experience with coding.
        </p>
        <BlockchainSimulator />
        <Pathfinder />
        <OldFiles />
      </div>
    </div>
  );
}

export default WebDevelopment;
