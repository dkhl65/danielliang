function IRProximitySensor() {
  return (
    <>
      <h2 id="irproximity">IR Proximity Sensor (2012)</h2>
      <p>
        An infrared phototransistor picks up infrared light from an adjacent IR
        LED that has bounced off an object. Black plastic from a garbage bag is
        used to block visible light to the phototransistor and let infrared
        through. The sensitivity is adjusted with the potentiometer and the
        piezo makes noise when an object is detected. This is an original
        project idea inspired by hand detectors on hand driers in public
        washrooms. The project file is{" "}
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
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANiiYAAAAAAG_Cipd-5aT9lsw?width=2592&height=1944"
      />
      <div>The breadboard setup with Arduino.</div>
      <br />
      <img
        alt="irproximitycircuit"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANnSYAAAAAAFBsR6zmTm4UbWM?width=951&height=614"
      />
      <div>Breadboard setup drawn in Fritzing.</div>
      <br />
      <img
        alt="irproximityschematic"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANoCYAAAAAANT7A3lPjy9GTdc?width=990&height=564"
      />
      <div>Schematic drawn in Fritzing.</div>
    </>
  );
}

export default IRProximitySensor;
