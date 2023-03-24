import React from "react";

function IRProximitySensor() {
  return (
    <>
      <h2 id="irproximity">IR Proximity Sensor (2012)</h2>
      <p>
        An infrared phototransistor picks up infrared light from an adjacent IR
        LED that has bounced off an object. Black plastic from a garbage bag is
        used to block visible light the the phototransistor and let infrared
        through. The sensitivity is adjusted with the potentiometer and the
        piezo makes noise when an object is detected. This is an original
        project idea that I thought, inspired by hand detectors on hand driers
        in public washrooms. The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhl6ipT5R-ZX0XKi5"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="irproximity"
        src="https://sat02pap005files.storage.live.com/y4mSAkLXJblSuy4QUKa9OhPCpYsQfpfc_iFXnEu57LT1zkTD7czAXq2lSIMYg_eJvefptLynk3xvbwbIasa9FxlqlV9QGc-Zr3QlfnIswJN2dP8FP7LoDKh3XvMp00Yz90eFglC-O5XgI4P0hMLTpR8weXArq7m8A6AU6uFv_SoZ1dIpp0GnjHKk2f8tFLbLWlk?width=2592&height=1944&cropmode=none"
      />
      <div>The breadboard setup with Arduino.</div>
      <br />
      <img
        alt="irproximitycircuit"
        src="https://sat02pap005files.storage.live.com/y4mDixt5VIJJojq6JgRQl1tYSYZYWAJ8BEGskK0MIwE227apyd2PM4JPCWFicff7itDcRs73SH1-fsjwX0cw169slP7pfEJN7ietIkZXl5FGhus2A8QVPr3AKL_1-DHuDyF1UwTighic1l0t7ZHEp48XADvRNCASicfGMmPjjOWzB88LaIn0LghO9wxOrlf5pao?width=951&height=614&cropmode=none"
      />
      <div>Breadboard setup drawn in Fritzing.</div>
      <br />
      <img
        alt="irproximityschematic"
        src="https://sat02pap005files.storage.live.com/y4mnC2MQZ-pgcXR1GJL82OMvJ82zDNI5UVdMZ2HN1pQNObO-UkYv92rVE-aMZyG1jrXwecQ8QXlrN1jeDVJWPYzzpUvowBDweMXDc-7crymBYXhjtEcmMr87sFnZA2hfMfpHxfb1_H75RcBk8jbsdVphflGwoKFCwfgzzFaLkFYp3T24QFoieH8_7AjgKSsZV8J?width=906&height=670&cropmode=none"
      />
      <div>Schematic drawn in Fritzing.</div>
    </>
  );
}

export default IRProximitySensor;
