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
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANXSYAAAAAAOhMYb6x3FJNNk4?width=502&height=512"
      />
      <div>The home screen of the game.</div>
      <br />
      <img
        alt="goblinsurvival"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANXiYAAAAAAKdfDSL3I-BJovk?width=502&height=507"
      />
      <div>
        In Survival mode, defeat as many goblins as possible. The game ends when
        the player contacts a goblin. Six goblins spawn at a time.
      </div>
      <br />
      <img
        alt="goblinswarm"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANXyYAAAAAAJdpVswp-b-0_Z4?width=502&height=507"
      />
      <div>
        In Swarm mode, defeat 50 goblins as fast as possible without HP reaching
        0. Six goblins spawn at a time.
      </div>
      <br />
      <img
        alt="goblinadventure"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANXCYAAAAAAMNSwmsMer_uwRY?width=502&height=507"
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
