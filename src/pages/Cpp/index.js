import TableOfContents from "../TableOfContents";
import CityMap from "./CityMap";
import RemoteControlRobot from "./RemoteControlRobot";
import Sumo from "./Sumo";
import Reversi from "./Reversi";
import Simon from "./Simon";
import LineFollowingRobot from "./LineFollowingRobot";
import TrafficLight from "./TrafficLight";
import IRProximitySensor from "./IRProximitySensor";
import IRRemote from "./IRRemote";
import Wikispace from "./Wikispace";

function Cpp() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>C/C++</h1>
        <p>
          I first learned C and C++ in Grade 7 and 8 (2011 - 2013) for Arduino
          using library books and online resources. I continued to use C in high
          school for microcontroller projects. I also took several university
          courses where I learned and used C and C++. I also used it during my
          PEY Co-op at Analog Devices.
        </p>
        <CityMap />
        <RemoteControlRobot />
        <Sumo />
        <Reversi />
        <LineFollowingRobot />
        <TrafficLight />
        <Simon />
        <IRProximitySensor />
        <IRRemote />
        <Wikispace />
      </div>
    </div>
  );
}

export default Cpp;
