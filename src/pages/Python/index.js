import React from "react";
import TableOfContents from "../TableOfContents";

import AIWeatherClassifier from "./AIWeatherClassifier";
import GoblinShooter from "./GoblinShooter";

function Python() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Python</h1>
        <p>
          I began learning Python on my own in 2019 to help my university's
          robotics team. I continued learning in the summer to develop my first
          animated computer game.
        </p>
        <AIWeatherClassifier />
        <GoblinShooter />
      </div>
    </div>
  );
}

export default Python;
