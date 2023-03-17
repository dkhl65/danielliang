import React from "react";
import TableOfContents from "./TableOfContents";

function Python() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Python</h1>
        <p>
          I began learning Python on my own in 2019 to help my university's
          robotics team. I continued learning in the summer to develop my first
          animated computer game.
        </p>
        <h2 id="goblin">Goblin Shooter (2019)</h2>
        <p>
          This is a side-scrolling platformer shooting game I made using Pygame.
          The player character is controlled using the keyboard. Goblins are
          randomly moving on the screen. The player needs to shoot the goblins
          to eliminate them. Contact with the goblins will damage the player.
          There are three game modes with different objectives.
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
        <img
          alt="goblinsurvival"
          src="https://sat02pap005files.storage.live.com/y4mWnKG4W746dCMNBjw-MPSuAzfaJ9m0Okgw9wUgtCOVWUgKUeZpBGJhVmAwBYZjADTbSPt7m0sxG54r5HqEfKvww3qTKtc9MS8IKthhpFRaUmO1xUS8MAHvzPDuiIfniMmprI_1NVsCXMa8kLjEJr9R-7lqW9MNk9jxfEDUYq-7DMOa0mAV6GBLxMOnbSXK2Kk?width=502&height=507&cropmode=none"
        />
        <img
          alt="goblinswarm"
          src="https://sat02pap005files.storage.live.com/y4m3FS7ws8AKlmY_P1Kuf2gx8aThemrmsjDMpcvQnvX-MH1rk9_Mfof-IHzdV-Hrj2XYc_eqKtQieYPKPF0-4jaYXrigJcJpp8mSiymnHcj7iEEzkeEWSK9lW0W-lOxU1HgG-Tr1c_2C-MrhT1J_m-WSHAUldQgYSuMWvnL1SZudYFz7gZeDZ5vCA_cY9By2qmP?width=502&height=507&cropmode=none"
        />
        <img
          alt="goblinadventure"
          src="https://sat02pap005files.storage.live.com/y4mN9wO6eK5BXqkgpLBuEC_EgFZpAUfCSvnXkVPCB5ahzZz_ud2VaGaCmpuo5XZYWLpG2FsAuVAI2cQA7kXCDPcjtaA0G-Unh1XmDb4VGRjB8mawtP9xFUVfJc0urv5Stx0TZA8QbRYajLRG2VgPuzBlmCZl5fofzUoVt4RfhocST4IYn-lZOLeQEGgNklZFLYW?width=502&height=507&cropmode=none"
        />
        <h2 id="aiweatherclassifier">AI Weather Classifier (2020)</h2>
        <p>
          This is a project I completed in the Introduction to Artificial
          Intelligence course in my third year of university with three other
          students. It classifies the weather in outdoor photographs as rain,
          sun, cloud, snow or fog using a convolutional neural network (CNN). We
          achieved an accuracy of 71.4% when testing with a set of 500 images
          that the model was not trained or validated with.
        </p>
        <p>
          Instead of a conventional CNN, my team decided to train a binary
          ResNet50 model for each of the five weather conditions to make the
          training simpler and divide out the work. The images used to train the
          models were taken from a{" "}
          <a
            href="https://github.com/berkgulay/WeatherPredictionFromImage"
            target="_blank"
            rel="noreferrer"
          >
            similar project on GitHub
          </a>{" "}
          and personal photos were used for validation and testing. The training
          was done using cloud computing on Google Colab. A video demonstration
          of the model working is show below.
        </p>
        <p>
          We worked on this project using Google Colab but the files are shared
          on{" "}
          <a
            href="https://github.com/DharmitP/weather-classification"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <iframe
          src="https://drive.google.com/file/d/1Exurzflbu3KKLG5nnCgxLV-LjeTTHuBK/preview"
          title="livedemo"
          width="800"
          height="450"
          allow="autoplay"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Python;
