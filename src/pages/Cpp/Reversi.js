import React from "react";

function Reversi() {
  return (
    <>
      <h2 id="reversi">Reversi (2017)</h2>
      <p>
        This is a large independent assignment in my first year university
        course Computer Fundamentals (APS105), programmed in C. This program is
        text-based and displays on the console with CodeLite IDE. It plays a
        Reversi game between the user and a computer AI algorithm. It also
        played my AI vs. the professor's AI, which is part of the assignment.
      </p>
      <p>
        The board's size is set at the beginning of the game. The user enters
        the coordinates to place their piece. B represents black, W represents
        white and U represents an empty square.
      </p>
      <p>
        The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmM6V1vVMmXx6U5y"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="reversiterminal"
        src="https://sat02pap005files.storage.live.com/y4mvZRfUmXVQtSAYSRa0MLKdNgSFHlXemjBCWqW57mSntpn5z_Y5e3Y9rTwiLXdLSCLJqT1e3odsrxz8bhDlftoLG_SFl73cSk4K5CdSZHpQsimTZUrxp-_LRHlj_45wW-VfE3rExDp45rwd5p1IFxp74LVblVmIHfHXhP7cTrAIDs8wCFdeiIoNddLNM2IBacR?width=605&height=438&cropmode=none"
      />
      <div>The terminal screen during a human vs AI game.</div>
      <br />
      <img
        alt="reversicode"
        src="https://sat02pap005files.storage.live.com/y4m9-igQgis_jSCgdRhOao8tFmCr3db4KxKRbdavH0M-Fcu1ZwxteRB8u0DDbckp1RsxyQkVHDOaHSkm9oDR5dF87avd2Ze4dKSQ4w_pXyy4BOfcD9DxEwb-TNK04cG6sIK1YUKCeLUPmZ-NUgdN8fz_a6joCc0GcQlOEFdBblIrRWN_YfLcax-fFYUITsgu_0r?width=786&height=593&cropmode=none"
      />
      <div>The CodeLite IDE.</div>
    </>
  );
}

export default Reversi;
