import React from "react";
import TableOfContents from "../TableOfContents";

import MusicTools from "./MusicTools";

function Verilog() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Verilog</h1>
        <p>
          I learned Verilog in the digital systems course in second year. It is
          a hardware description language, which mean it describes a digital
          circuit and it is translated into hardware by the compiler. It
          requires the knowledge of digital circuit components such as logic
          gates, registers and memory, most of which I began learning a the
          start of the semester.
        </p>
        <MusicTools />
      </div>
    </div>
  );
}

export default Verilog;
