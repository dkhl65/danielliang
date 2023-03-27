import React from "react";

function GoblinShooter() {
  return (
    <>
      <h2 id="goblin">Goblin Shooter (2019)</h2>
      <p>
        This is a side-scrolling platformer shooting game I made using Pygame.
        The player character is controlled using the keyboard. Goblins are
        randomly moving on the screen. The player needs to shoot the goblins to
        eliminate them. Contact with the goblins will damage the player.
      </p>
      <p>
        There are three game modes with different objectives. WASD keys are for
        movement, space bar is for jumping and the Enter key is for shooting.
        Goblins have a purple health bar. Contact with a goblin will damage the
        player and provide a short invicibility time. Goblins walk back and
        forth with random jumping insided a defined area.
      </p>
      <p>
        The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Goblin-Shooter"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="goblinmainmenu"
        src="https://sat02pap005files.storage.live.com/y4mshyVqCWq0g7qREbP3Teimj--aYWBLvXt6lcSrhJgMJ4IFPnJnGzFCAs5yRN5OBGFwdozrr1D6P6l0ox_ebSMYX7L5jPgrr5XLqMvzLYy7_YFgXvbMTiYND9GM2g9K3KVwZgCGMYQZLurGX5j_fnCS_XX-6vvU01fy0n36GWfcqCMXMHLSDjWp7j0riczYwrq?width=502&height=512&cropmode=none"
      />
      <div>The home screen of the game.</div>
      <br />
      <img
        alt="goblinsurvival"
        src="https://sat02pap005files.storage.live.com/y4mWnKG4W746dCMNBjw-MPSuAzfaJ9m0Okgw9wUgtCOVWUgKUeZpBGJhVmAwBYZjADTbSPt7m0sxG54r5HqEfKvww3qTKtc9MS8IKthhpFRaUmO1xUS8MAHvzPDuiIfniMmprI_1NVsCXMa8kLjEJr9R-7lqW9MNk9jxfEDUYq-7DMOa0mAV6GBLxMOnbSXK2Kk?width=502&height=507&cropmode=none"
      />
      <div>
        In Survival mode, defeat as many goblins as possible. The game ends when
        the player contacts a goblin. Six goblins spawn at a time.
      </div>
      <br />
      <img
        alt="goblinswarm"
        src="https://sat02pap005files.storage.live.com/y4m3FS7ws8AKlmY_P1Kuf2gx8aThemrmsjDMpcvQnvX-MH1rk9_Mfof-IHzdV-Hrj2XYc_eqKtQieYPKPF0-4jaYXrigJcJpp8mSiymnHcj7iEEzkeEWSK9lW0W-lOxU1HgG-Tr1c_2C-MrhT1J_m-WSHAUldQgYSuMWvnL1SZudYFz7gZeDZ5vCA_cY9By2qmP?width=502&height=507&cropmode=none"
      />
      <div>
        In Swarm mode, defeat 50 goblins as fast as possible without HP reaching
        0. Six goblins spawn at a time.
      </div>
      <br />
      <img
        alt="goblinadventure"
        src="https://sat02pap005files.storage.live.com/y4mN9wO6eK5BXqkgpLBuEC_EgFZpAUfCSvnXkVPCB5ahzZz_ud2VaGaCmpuo5XZYWLpG2FsAuVAI2cQA7kXCDPcjtaA0G-Unh1XmDb4VGRjB8mawtP9xFUVfJc0urv5Stx0TZA8QbRYajLRG2VgPuzBlmCZl5fofzUoVt4RfhocST4IYn-lZOLeQEGgNklZFLYW?width=502&height=507&cropmode=none"
      />
      <div>
        Adventure mode is side-scrolling. Defeat all goblins, collect all gold
        coins and reach the end without HP reaching 0. Falling off a cliff will
        end the game.
      </div>
    </>
  );
}

export default GoblinShooter;
