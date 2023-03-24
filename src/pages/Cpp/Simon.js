import React from "react";

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
        src="https://sat02pap005files.storage.live.com/y4m4NdgpW6lqU6zJTzYVGftj3KIHPBjOrQ0DdOmJhOPOo6ZJpmeZ0P80AtpovD-yx2tngLp9qQivwKHDgkkg6xGjswQVEpHkfhcVowUbOORN4ufkC09SGaK5mjwuymEUnTvGtlFXrBhK8HiwBSvZPk1-_dOddq2T-_kIccpbxPgn3worHIw2k21XfB5tga9U3vP?width=3264&height=2448&cropmode=none"
      />
      <div>New setup using ATtiny84.</div>
      <br />
      <img
        alt="simoncircuit"
        src="https://sat02pap005files.storage.live.com/y4mPbUg2t8chqIWGI7G8Q5rXoDyzd3XqzUOxmYIaAfG3EFG0sS39SDMUHdIQ235lso0RRowikn_sTYtu2-gdMN5QDLChKAULx6rz_ToLFstyaeQXW5eEfvxPKhMAooAGRwTgJ5KwploExrwR7eC6SmJarLDZCDU_1XVepBNk9ND3SOKQPn2qrEyhYwybw_fHuF1?width=845&height=581&cropmode=none"
      />
      <div>Original circuit drawn in Fritzing.</div>
      <br />
      <img
        alt="simonschematic"
        src="https://sat02pap005files.storage.live.com/y4mEQMSGYFThzmgoxWp5yE3kQqCiFKbkn5r9UqPVUgpvkz1YromV5ZA8cWc3gY218nkesmHSgVlxkfhznc-SsTi-fn57e8NIylLt32e7tGfDIXzqPR8awv8yPugKYkLA4qs0v8cjps0NbwRUJpV-xF-w72azhFTNLvjMRop5yzIt7EcZfuEFX9lP1ySRqX_wS2-?width=867&height=561&cropmode=none"
      />
      <div>Original schematic drawn in Fritzing.</div>
      <br />
      <iframe
        src="https://drive.google.com/file/d/1Jk-3ZqRJF-BUz8v3b0fxc92w9tJCn-7d/preview"
        title="simon"
        width="640"
        height="480"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
      <div>Video of the the original setup.</div>
      <br />
      <iframe
        src="https://drive.google.com/file/d/1uPc9gaRuindPLJ79vAO0_t_egC_7Ph2W/preview"
        title="simonattiny"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
      <div>Video of the new setup.</div>
    </>
  );
}

export default Simon;
