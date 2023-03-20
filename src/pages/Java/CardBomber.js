import React from "react";

function CardBomber() {
  return (
    <>
      <h2 id="cardbomber">Card Bomber (2016)</h2>
      <p>
        This is the final project of my grade 11 computer science course. We had
        to design a game. This game is spin on Minesweeper. There is a grid of
        square cards, which can contain a number value or a bomb. Each row and
        column has a clue indicating the total of cards values and number of
        bombs. Hitting too many bombs will end the game.
      </p>
      <p>
        The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Card-Bomber"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The project files are{" "}
        <a href="https://1drv.ms/u/s!Arlw0YD7zqYNhmITCutfpFVd7GrB">here</a>.
      </p>
      <img
        alt="cardbomber"
        src="https://sat02pap005files.storage.live.com/y4m6K_Sn-hXWGow9dz7No3zQKvn9ystBDw9MUyIp3Wc53lbrH2mxBaNbHTCgtVu3fipVXoQdp-p53Nb35LZ0lb-1DOjHQf8fh_oCybXIFmRcHpRQ57C_Eszke28BJn-mzIBc4EbIEIPGFoVNu4y3xiEieE8Fk7zne8sPQ4wCYJi8su1gKjKEqczzLqNkO4HKYDr?width=672&height=590&cropmode=none"
      />
    </>
  );
}

export default CardBomber;
