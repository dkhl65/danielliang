import React from "react";

function CardBomberApp() {
  return (
    <>
      <h2 id="cardbomberapp">Card Bomber Android App (2018)</h2>
      <p>
        Android app developing with Android Studio is a personal project that I
        took on in the summer break. This app is the mobile version of the{" "}
        <a href="#cardbomber">Card Bomber</a> game which I made in grade 11.
      </p>
      <p>
        The text in the app is written in English, French, Simplified Chinese
        and Traditional Chinese. The language of the displayed text is changed
        by the device's language setting, defaulting to English for unsupported
        languages.
      </p>
      <p>
        The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Card-Bomber-App"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The project files are{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmAFsjkxQq79B6z-"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The APK file can be installed onto an Android device, located in
        CardBomber/app/release/app-release.apk
      </p>
      <img
        alt="cardbomberapp"
        src="https://sat02pap005files.storage.live.com/y4mzMyq1yYYvYFawtuUMlMAjZIs2Q-om6xSogpZ65PqQx-cZMwdp5YTEZwd7EdlcBkksy3hlhxZKG-FXnf7S7SKNPmUqHEmMhCHqM094zeCfwIsdCTwaErJSdcQw6axCGxq98yj7UgxlumstswdNvdXVvr7NyFOL3KW3rYx4W3dhSiQtagFSgIuauvx7XVW94El?width=2607&height=1682&cropmode=none"
      />
      <div>
        This is the home screen of the app, displayed inside an Android
        emulator. The options button is for turning the sound effects on or off.
      </div>
      <br />
      <img
        alt="gamescreen"
        src="https://sat02pap005files.storage.live.com/y4mB156Ys-DZQWQJwHdFHKLHWN7jTkii4dRDar7zPmlrJ6cgOsWtc9TPbi4facwwP0C8EPQfY29JoqqHYoaXOXxUWo0qJ-jKpGUYCKQLV92Vs2W2EZCDxNpmo6XzxGRmLJqd0hqWMXaWtVn5HWHMO2VlQOeQdzAymnFgeko1MW_tEJ_YIOxOlpFwBGXCbZJp8Al?width=688&height=456&cropmode=none"
        className="framed"
        id="gamescreen"
      />
      <div>
        This is the game screen. Black numbers indicate the total number of
        points in that row or column. Grey numbers indicate the number of bombs
        in that column. Touching a green card flips it over. If a number is
        flipped over, the number is added to the score. If a bomb is flipped
        over, a life is deducted. When all cards except bombs are flipped over,
        the player can advance to the next level. A new level adds one row and
        one column. The game ends when all lives are used. The high score is
        saved locally on the device.
      </div>
    </>
  );
}

export default CardBomberApp;
