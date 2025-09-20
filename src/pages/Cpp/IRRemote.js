function IRRemote() {
  return (
    <>
      <h2 id="irremote">IR Remote (2012)</h2>
      <p>
        This is a universal remote that records an IR signal and stores it in
        EEPROM memory. It can broadcast stored signals. I got source code
        online, then modified it to include a soft potentiometer to select the
        memory slot of the signal to broadcast. The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhl3dO38Hby_D_MCY"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="irremote"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANiyYAAAAAAIPxWK9i-TRti70?width=2592&height=1944"
      />
      <div>The breadboard setup with Arduino.</div>
      <br />
      <img
        alt="irremotecircuit"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANnSYAAAAAAFBsR6zmTm4UbWM?width=951&height=614"
      />
      <div>Breadboard setup drawn in Fritzing.</div>
      <br />
      <img
        alt="irremoteschematic"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANoCYAAAAAANT7A3lPjy9GTdc?width=990&height=564"
      />
      <div>Schematic drawn in Fritzing.</div>
    </>
  );
}

export default IRRemote;
