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
        src="https://sat02pap005files.storage.live.com/y4mFFN1mk1JyBZrU8XB15NkqiA6SmNr29SAjdlMZwN8_Y6VDcDSIIbfmnzFNsqU97W3_Gp_WK0jxG7vTO-_t_92_eKIngN7oPNJIvHym2siUeBmiVje7vi5iV0lZuSVLHzKlvZgFBVdO7CCKejSgl9l1Fdilc6aT_4q34eWlbhXzCdDV6MJ-2-4EScTElCozhSH?width=911&height=1035&cropmode=none"
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
