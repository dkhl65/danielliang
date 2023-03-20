import React from "react";
import Gallery from "../Gallery";

const wikispaceSources = [
  "https://sat02pap005files.storage.live.com/y4m08GbZ-4RsTa1_l8_PmW1yzVpPSSkuXoEZXCsBlA91CIzYYzWwKrY2LzAcNII5Pu41vrw9i6v_lPPAFuqhY79qkPLhcmHx7R7A6H0_7hOTknmzKZXjUExG7gtNcBK6UP4BklW1xZKlLmW5PNaYZ6BOWUjg1VOgOxSzmLQFVveIMQdIl3lkUebM1-I9gEnDspK?width=1712&height=1017&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mn3WZG04DhqjgcT0MpPg8zlKpyOnj1Me-SqKc4yLXeQNCXdRIOvWXJU_buZR3rZNeyAZGKeaVRhpAVOWKCCEY1fon2CJlex6oIU4dfqCf9Jeaf6KMEyoOlfjXQsTy9wNtkrpMLSO73ecYERp-N1hG9Yb7v0H22oG_d2lqljK8Y5QbbVVHQj6TxjWSteoyjZhO?width=1711&height=1017&cropmode=none",
];

function Wikispace() {
  return (
    <>
      <h2 id="wikispace">Wikispace (2012)</h2>
      <p>
        In grade 7, I made a Wikispace for my Arduino projects and to help
        classmates who were also trying to use Arduino. Wikispace is like a
        website others can edit. Wikispace has closed down, forcing me to take
        my pages offline. The HTML files can be viewed{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhl8n32Y7BQICScfF"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        , which have pictures, words and code, but the background graphics are
        not visible.
      </p>
      <Gallery sources={wikispaceSources} />
    </>
  );
}

export default Wikispace;
