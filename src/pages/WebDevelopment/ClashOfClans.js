import React from "react";

function ClashOfClans() {
  return (
    <>
      <h2 id="clashofclans">
        Clash of Clans Builder Base Tall Grass Editor (2021)
      </h2>
      <p>
        During my spare time, I used jQuery to create a tool for planning tall
        grass patterns in the Clash of Clans Builder Base. Up to 50 squares of
        tall grass tiles can be on the base at a time. Tall grass always spawns
        next to existing tall grass, ancient barbarian statue, or old barbarian
        statue. By forcing the tall grass to grow where desired using buildings,
        walls, trap or decorations, a design can be drawn on the base.
      </p>
      <p>
        The tool is deployed to{" "}
        <a
          href="https://danielsoftware.vercel.app/grass-editor-browser.html"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . The source code is on{" "}
        <a
          href="https://github.com/dkhl65/danielsoftware"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </p>
      <img
        alt="plan"
        src="https://sat02pap005files.storage.live.com/y4moTFvJK2INiO-0epSxRXrNJen4RDzfk46aTimjaYSrngo9osjnCAsVCmdrTtzwjKnchk0xWtGFtm8w-9oDSV8cB63t45sGJRD06uSS2LH-8RrSREGAGPotGTVxv7bNThrBpp2y2Ki6Xca6ifVEFAs0GnQ6D2xMSXsLCcGV0-f8f8xb-ttCXnyEqcYScRIKz3e?width=911&height=1040&cropmode=none"
        height="900"
      />
      <div>All 50 tiles have been used to plan a pattern.</div>
      <br />
      <img
        alt="base"
        src="https://sat02pap005files.storage.live.com/y4muwi6LKSI0zU8VuS97GTPg4-hoIJ-shtuGh0DLl-MTj82Ieg18oaiN5TNNrM4hQlEs0N-KdwS9lpqdfvftGCEpHhSXLi2D0Dpa5ZgBji3_demMlzLkvXFgBDkpIBbFDzqJvdLDhrzfICXJ8JVbsZYH-RobmjmqkwLmVUVXdezNuNzGdqI-MttRe-vwJM-KP9G?width=786&height=459&cropmode=none"
      />
      <div>The pattern has been implemented in my Builder Base.</div>
    </>
  );
}

export default ClashOfClans;
