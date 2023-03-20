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

function LineFollowingRobot() {
  return (
    <>
      <h2 id="linefollowing">Line Following Robot (2017)</h2>
      <p>
        This is the final project of my grade 12 Computer Engineering course.
        The robot has two light sensors to help if follow a black lines. It has
        to recognize black line patterns and navigate a course. I was able to
        complete all the challenges with my robot. The GitHub repository is{" "}
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
      <Gallery sources={lineFollowingPictures} />
      <br />
      <Gallery
        video="true"
        sources={lineFollowingVideos}
        title="linefollowing"
        width="800"
        height="450"
      />
      <h2 id="traffic">Traffic Light Model (2016)</h2>
      <p>
        For my grade 11 Computer Engineering final project, I made a model of a
        four way intersection that is controlled with a PIC 24FV32KA
        microcontroller. There are four traffic lights and a stepper motor for a
        railroad crossing gate. The lights flash yellow in the direction of
        pedestrian crossing. If the crossing button is pressed, the stepper
        motor lowers the gate and the lights flash red . There is also flashing
        green lights if the advanced green button is pressed. The GitHub
        repository is{" "}
        <a
          href="https://github.com/dkhl65/Traffic-Light-Model"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        and the project files are{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmQYfkIAmTBRSqR4"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="trafficstreet"
        src="https://sat02pap005files.storage.live.com/y4msyvRhEhe3oWcLXfwXIdzeuShDxKDxwhV40qilfbAHRNEeJ9E1TmpNI1dgRsnPTLsAIZ1eYv-grddieMXyHIjjz4l-MXxkgbSH2oRXqiGeNt7FvwPT3jSXPXTpN8Off9R1Jc4K7CyZFVTxXH1EhzaFMqPzgSt9_patu7OhRTPoNHbBhDedUR8ZFPlbmaQUQYK?width=3264&height=2448&cropmode=none"
      />
      <img
        alt="trafficmodel"
        src="https://sat02pap005files.storage.live.com/y4mJwzzIUD5B560IrqwRr46awGEmbJsUFhhkmRb5qRiNmu6jAi-OIKYWl18IW-e14oC0phZedI9tmT0-VHeBzb_SEYwpdi3wpukgBoqQ-CQi4F_zoiZh2Oe8sXrNYevOUjkWhhTlFyv9bFLTCU1_Qj8OwOVAQinNP5Z-t-LIIAKug7nrAU-KVo-GWG0qzm30LIO?width=3264&height=2448&cropmode=none"
      />
      <img
        alt="trafficcircuit"
        src="https://sat02pap005files.storage.live.com/y4mJ8fTkWTAMpOtc0SbgEE4L6Nxdbdly64BGvJvMNSxk2MmwWtzMvbum0djIQWxRgKTKhbL9jUfz0wRdsL_ASxUpY_dqT1FNNaz5dqmYsG3Q-E1-GRnCqyRh3s0i0ztrnLYKkesBMK7gZ6GwrLbVCaL4SrjvLuIAX6h_UDNU9b5YYL7WYO2sD5KGkEX2ZKbJCk5?width=2448&height=1836&cropmode=none"
      />
    </>
  );
}

export default LineFollowingRobot;
