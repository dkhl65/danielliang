function Simon() {
  return (
    <>
      <h2 id="simon">Simon (2012, 2018)</h2>
      <p>
        This is a game where the player repeats the light sequence that the
        Arduino shows by pressing the buttons that corresponds to the LEDs. I
        found the source code for the game online. I modified it to improve the
        musical sequences. The original setup can be seen in the old video.
      </p>
      <p>
        Later, I made a version of this game that is controlled by the ATTiny84,
        which is a smaller microcontroller chip that can be programmed through
        the Arduino Uno. I also added a volume knob for the piezo. The Uno file
        is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhlvtb2fw_hX7kFc1"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The ATtiny84 file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhlxXQv0tVA1TNywx"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="simonphoto"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANaCYAAAAAAO6KVxGhWPQmSOA?width=3264&height=2448"
      />
      <div>New setup using ATtiny84.</div>
      <br />
      <img
        alt="simoncircuit"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANeiYAAAAAAOe-wT2_Z45pVqE?width=845&height=581"
      />
      <div>Original circuit drawn in Fritzing.</div>
      <br />
      <img
        alt="simonschematic"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANeSYAAAAAALkRRCkzoS_P6uQ?width=867&height=561"
      />
      <div>Original schematic drawn in Fritzing.</div>
      <br />
      <iframe
        src="https://drive.google.com/file/d/1Jk-3ZqRJF-BUz8v3b0fxc92w9tJCn-7d/preview"
        title="simon"
        width="640"
        height="480"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
      <div>Video of the the original setup.</div>
      <br />
      <iframe
        src="https://drive.google.com/file/d/1uPc9gaRuindPLJ79vAO0_t_egC_7Ph2W/preview"
        title="simonattiny"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen={true}
      ></iframe>
      <div>Video of the new setup.</div>
    </>
  );
}

export default Simon;
