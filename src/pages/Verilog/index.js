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
          I learned Verilog in the Digital Systems course (ECE241) in my second
          year of university. It is a hardware description language, which mean
          it describes a digital circuit and it is translated into hardware by
          the compiler. It requires the knowledge of digital circuit components
          such as logic gates, registers and memory.
        </p>
        <MusicTools />
      </div>
    </div>
  );
}

export default Verilog;
