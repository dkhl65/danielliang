import Gallery from "../Gallery";

const remoteRobotSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANbSYAAAAAAHVeAamregw8OWU?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANaiYAAAAAAKZduiKEXaLjdwQ?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANayYAAAAAAKpHz_0vzPL1WS8?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANbCYAAAAAAGqpKi4sUgN8Xfw?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANcyYAAAAAABgjClMiGM3eQhg?width=3264&height=2448",
];

const remoteRobotCaptions = [
  <>Diagonal view.</>,
  <>Right side view.</>,
  <>Back view.</>,
  <>Front view.</>,
  <>Top view.</>,
];

function RemoteControlRobot() {
  return (
    <>
      <h2 id="remote">Remote Control Robot (2018)</h2>
      <p>
        After completing my <a href="#linefollowing">line following robot</a>{" "}
        project, I got to keep all parts of the robot except the programmer. I
        decided to replaced the PIC microcontroller with an Arduino Nano and
        added the IR decoder, as well as a second set of batteries dedicated to
        powering the motor. The robot is controlled with a Sony remote, has
        three speed settings and can make noise by vibrating the motors. The
        project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhlnYOp5slcDErvwM"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <Gallery sources={remoteRobotSources} captions={remoteRobotCaptions} />
      <br />
      <img
        alt="remote"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANaSYAAAAAAKWavtorkeYb-OQ?width=3264&height=2448"
      />
      <div>I used an extra IR remote to control the robot.</div>
      <br />
      <iframe
        src="https://drive.google.com/file/d/1I9em7jD5Shq9jBCwt-YuA88MqS97IYe2/preview"
        title="remoterobot"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
      <div>Video demonstration.</div>
    </>
  );
}

export default RemoteControlRobot;
