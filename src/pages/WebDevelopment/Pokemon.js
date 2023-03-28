import React from "react";

function Pokemon() {
  return (
    <>
      <h2 id="pokemon">Pokemon Team Type Calculator (2021)</h2>
      <p>
        During my spare time, I used jQuery to create a tool for competitive
        Pokemon battling. This tool takes the types of up to six Pokemon and
        their moves, and shows their weaknesses, resistances, and types that
        resist their moves.
      </p>
      <p>
        The tool is deployed to{" "}
        <a
          href="https://danielsoftware.vercel.app/pokemon-team-calc.html"
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
          Github.
        </a>
        .
      </p>

      <img
        alt="pokemon"
        src="https://sat02pap005files.storage.live.com/y4mV2_bWSQI5R_XiZFRxccBFkp0IMLQktWKLXVXi-ccb9AeZNEkW_TPJKeyBsuEhYfPPzLl8wLJYafdc7KqI7WWYGdsp-RrfSJJb_DN7AHWV-TbQzSaFlDxFsoF1_9b6NyBT_NYDVO2jJz3HrrMUqqJekplKVDaTogB6FudcX5H_ASUp4alxTzwH952huWAE9Nm?width=911&height=1040&cropmode=none"
        height="900"
      />
      <div>
        An example team from{" "}
        <a
          href="https://youtu.be/KO8lULmnnOM?t=1077"
          target="_blank"
          rel="noreferrer"
        >
          foofootoo
        </a>{" "}
        has been put into the tool.
      </div>
    </>
  );
}

export default Pokemon;
