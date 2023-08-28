import Gallery from "../Gallery";

const sumoSources = [
  "https://sat02pap005files.storage.live.com/y4mf_9epOmBDcqx0DhomsfM6rfpMfdmRy8zzSh-hYNvoOSSs1V6755Ehn09yrP7OHR_ZT3ORIMUk4WX3Z7X2rIPbTCXbLRFv5rMUGTCfLRfPBjCvTPj9h3ZPyG_gZHcauwLn2sYDbe4RM_lxogjzp4Vp7RRxEC69oKgOgJTPPtx0t-zMBZOsu5mDr1KSe0LoKFH?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mrircDQFjR9tdHdBifYmXzrLYTkbZzgubR7GNHzRA0DaKVVMygCUdGR5iYpsiYx5LO_GviDVOyzastEMop2kP6-oK6I0C9D7ivTm3fSPMnjXaLFTdU-yYl6MOORMvK_cDILaP2nRPHcONKSFOdBEZuZgt6AVU58kS9akIbYd-PJaLsxnoUWzag8TIU_ojfID-?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m_4SI8Tc_r1SzZCo42aRoi33AUW9tvyJDv3fikRefMrKEs_ZIUzZtogoiB6geAG8kYD5QyRRGvToAepNEQEo0h5F4Kc5YJOq4r9j1EH8Hz24Fy2fzMH9NzuxyoonaJwxEeuA10WNbQyjfFOVUWFiC95RWDoUdTBpOtnReH2Wq30dXKR-84hCRDrKja7dCPRgn?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mTaqD8x3r4AKANBRqtymskCUKFsf7-C2eVgV-Rv0WfL8M1FPhQPZ4B1OHU4GuxAEEM_wcyBt_OaxTutAysoo9JVrJn2Zydsr8wk6NrruhRj8F0ocYr1e5vRpkFE1iWtZ6m0deEW0xzNSkZ6hs-ddij_c_tgdHQh1xnchJSjM9qqoOzY4-_gIznUfyIzYfejnv?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mtOFmclDXT3NpXQSclrc8fH7P9cz7IX7SVraA3XbZ4VTtQsD-gLzYVwHvGh71ujBxfHKtYKNDK9eC5Co4Oojt8KByhK_uMHnO-zIwmpt6ZDIVLN3DSfJvdp5FftVqHZ0RSlYgTrJJ8jhxy80SN9u3IZc27mg4x8zmq7S--snFzirxIT71B1pCcXlRDXEtlQT8?width=3264&height=2448&cropmode=none",
];

const sumoCaptions = [
  <>Diagonal view.</>,
  <>Right side view.</>,
  <>Back view. The paper covers the sharp edges of the metal</>,
  <>Top view.</>,
  <>
    Front view. The plastic card provides an edge so the robot does not flip
    itself over when ramming another robot.
  </>,
];

function Sumo() {
  return (
    <>
      <h2 id="sumo">Sumo Robotics (2017-2018)</h2>
      <p>
        I joined the University of Toronto Robotics Association (UTRA) and
        participated in their Sumo robot competition. Sumo is a type of robot
        competition where two robots try to push each other out of the ring. I
        worked on this robot with two other students throughout the entire
        school year.
      </p>
      <p>
        The robot has two motors, two wheels, an ultrasonic sensor in front and
        a line sensor at the bottom that detects the edge of the ring. It is
        controlled by ATMega328, which is the brains of an Arduino. It is
        programmed by detaching the ATMega328 chip and placing it into an
        Arduino board. The power source is a 9V battery with a 5V regulator. The
        final components are soldered together. The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhlqdHT9PCcC2BQ83"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="sumocad"
        src="https://sat02pap005files.storage.live.com/y4m62h6ZE3K-5bx-Jzn8wsfs1p20NPTL1aAUzOuk7eFWEnhPNfSNTumhMEOX-Fqf0kPwsHIN_R2mXn2UjBviiqyMprWZosY-PnQ2EhCaWzV-3m2CHk8TMLzONnmKRmoYysC0els7b7pA1CUZofOrwy0y6Bi1qqZgvEqTuu1OxFkQxjNppeNgVwAbR1y5_9oiF4n?width=1603&height=1131&cropmode=none"
      />
      <div>
        The chassis of the robot was designed in Autodesk Fusion 360, then cut
        out of sheet metal.
      </div>
      <br />
      <Gallery sources={sumoSources} captions={sumoCaptions} />
      <br />
      <iframe
        src="https://drive.google.com/file/d/1Oz7C7E_jRXC33XM6d53Jbn_yzI2ZYkBB/preview"
        title="sumo"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
      <div>Video of a sumo robot match.</div>
    </>
  );
}

export default Sumo;
