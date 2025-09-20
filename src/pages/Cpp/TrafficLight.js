function TrafficLight() {
  return (
    <>
      <h2 id="traffic">Traffic Light Model (2016)</h2>
      <p>
        For my Grade 11 Computer Engineering Technology (TEJ3M0) final project,
        I made a model of a four way intersection that is controlled with a PIC
        24FV32KA microcontroller.
      </p>
      <p>
        There are four traffic lights and a stepper motor for a railroad
        crossing gate. The lights flash yellow in the direction of pedestrian
        crossing. If the crossing button is pressed, the stepper motor lowers
        the gate and the lights flash red. There is also flashing green lights
        if the advanced green button is pressed.
      </p>
      <p>
        The GitHub repository is{" "}
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
        src="https://1drv.ms/i/c/0da6cefb80d170b9/IQS5cNGA-86mIIANjiYAAAAAAZ5V-ePzJLW-DXeb6Il5Ab8?width=3264&height=2448"
      />
      <img
        alt="trafficmodel"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/IQS5cNGA-86mIIANjCYAAAAAAZCBa6E6ehzTSAezGOb4pg8?width=3264&height=2448"
      />
      <img
        alt="trafficcircuit"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/IQS5cNGA-86mIIANkCYAAAAAAZ5TyMAVfnHEhnCRLhQdpTo?width=3264&height=2448"
      />
    </>
  );
}

export default TrafficLight;
