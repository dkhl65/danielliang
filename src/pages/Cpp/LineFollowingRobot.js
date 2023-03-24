import React from "react";
import Gallery from "../Gallery";

const lineFollowingPictures = [
  "https://sat02pap005files.storage.live.com/y4mxiweXJQ5-qtcPCL5NI19oMR-cLOJs-KsuqjkDAy4PTsfk_pTnENRDBhqo2m-uOOl9A7xFXqDIiYZx0UnsmxXBOntpWFPhNKDhZMGza0Gc8eAusKP-7ne_I5QgkvAsTRsWFovh0r8At3LdRz0feK1JUwYwyUDHUZDC_JYGEvfH352bn41n202sFBtdKb8GjDr?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4msyg9lZFT7Fm5TjfsoVoYCpBt0nZ-BCLbvsoWWq2SLLlL-h8K-ZYJZdADYdJ8NPVuLoOIz109YDLC_0R-edQiqdwSzsT2MqXvxgeVxiHQcURrhbqFXPq_qXuhPD8D-P_zMQlQb2AI4BwC54Mtby2CiCb_pEXsUSzq1f6J87VKJ5K5cNr-vRnmk40qrnIHhnUZ?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mMczPgABL8dlkNL8jFLvm7ZhG2-OSJQw_rG91DMVb0P3KV69cVaF7OmAtJxqCX5YBB-Br8Vt6qmQKUsELliRV7Yr7dEHRFNnlklsmVL-pfjBXiSZP74DtdNliLKJ_eX13EvfMPDbZ4iFiN76Nn4gn3MfPzhESvC91SufcsAV_cOWKjcIYyP962ON0Aigj_-3h?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m1hmcR1eOvRXJpoSvAKZJn0u-2D61hhM3bOpO8ZTmNsqXp79CtQZJyoRBiqFLvYkPlUi-h7S5NOTpMENxm5Ykb-Wumk_icyLIfMjqgTnQKVZkbwVBIKWr86A6pyJ51yqsy-fEXgt7zatYQQd_FFH4iugohkJyYvND1FotY4dwjCICCCYOFPPJcvlLyQkKgMYU?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m3QvbclBI89YL6ZGWVawzy1viEwcue2Ql6wJj6D6gO81blSJE_PQhIYcJrZODfG_xQ_VqIKsVXazOpU1ye0j5BY1mk8dmlZ6CrUT3lx4TyYVNiyIkCNRwO7uoTi0wLmaXm2jYNVfwWcLF4qwCgAn_sKKnxtaJd_2Ck8Lyl8WKzd0o7_skBsJBLqC8Egyrs0Rk?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mKLdFSu7ph6xKVAPQh2ZvgWT52am7GtijlK7NDiPSlm-FNWQbPCJnd4jaXVVouwevKOVwWarxsHuUGR8wPysii4l38LxxP1E0mIbNs0KJDuhzXLDxYxTlQuTZ87XXAt6KzlLPFCH2RS3FzJXjRYuZwuuYYS_zV2jCIM5UYx868dkPvTDG4nbbSLHIxBkl47AB?width=3264&height=2448&cropmode=none",
];

const pictureCaptions = [
  "Right side view.",
  "Diagonal view.",
  "Back view.",
  "Left side view.",
  "Front view.",
  "Top view.",
];

const lineFollowingVideos = [
  "https://drive.google.com/file/d/1fFApYQjbwS0yc1TLYr4N8KFeK4w7keVC/preview",
  "https://drive.google.com/file/d/1zFx6L64IoBV4s6jmVK46lg6gG96Q83ox/preview",
  "https://drive.google.com/file/d/1fEEeqBIFIkupm20X8hD60wEUKscVczko/preview",
  "https://drive.google.com/file/d/1rp-jCtd_RSKAiLruAsTFY713ps6ZT85r/preview",
  "https://drive.google.com/file/d/1a0Fl2Tn5ZZTkg_moGMUw-EJ2wIsbAFN6/preview",
  "https://drive.google.com/file/d/1BLjk1KojvNegyJH2eAKrvdS8N3khY26H/preview",
  "https://drive.google.com/file/d/1y21sQB57Q0WUx0lRAzxt53oAXA4GW6Iz/preview",
  "https://drive.google.com/file/d/1u11nNWasjClbpq4cqsU5WwAiCHTRETI0/preview",
];

const videoCaptions = [
  "Continuous single smooth line course.",
  "Sharp angles with line breaks.",
  "Sharp angles with line breaks (other direction).",
  "Move to the correct stopping position based on number of perpendicular black lines at the start (1).",
  "Move to the correct stopping position based on number of perpendicular black lines at the start (2).",
  "Move to the correct stopping position based on number of perpendicular black lines at the start (3).",
  "Move to the correct stopping position based on number of perpendicular black lines at the start (4).",
  "Most complex course. Make turns based on signals given by the horizontal black tape.",
];

function LineFollowingRobot() {
  return (
    <>
      <h2 id="linefollowing">Line Following Robot (2017)</h2>
      <p>
        This is the final project of my grade 12 Computer Engineering Technology
        course (TEJ4M0). The robot has two light sensors to help if follow a
        black lines. It has to recognize black line patterns and navigate a
        course. The robot is controlled by a PIC 24FV32KA microcontroller
        programmed in C. I was able to complete all the challenges with my
        robot.
      </p>
      <p>
        The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Line-Following-Robot"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        and the project files are{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmWqsD47aWU5qdWD"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <Gallery sources={lineFollowingPictures} captions={pictureCaptions} />
      <br />
      <Gallery
        video="true"
        sources={lineFollowingVideos}
        captions={videoCaptions}
        title="linefollowing"
        width="800"
        height="450"
      />
    </>
  );
}

export default LineFollowingRobot;
