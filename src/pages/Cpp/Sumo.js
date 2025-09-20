import Gallery from "../Gallery";

const sumoSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANkiYAAAAAAHGo5iEHyN3P2w8?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANlCYAAAAAAG-OyN_rBb7f2EY?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANlSYAAAAAANA-yT5HAqQedGE?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANliYAAAAAAOVNUNNIP6Z9vX4?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANkyYAAAAAAJmQpeI84x2D5Iw?width=3264&height=2448",
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
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANfSYAAAAAANnivJkXHOSSNJQ?width=1603&height=1131"
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
