function Pokemon() {
  return (
    <>
      <h2 id="pokemon">Pokemon Team Type Calculator (2021)</h2>
      <p>
        During my spare time, I used jQuery to create a tool for competitive
        Pokemon battling. This tool takes the types of up to six Pokemon and
        their moves, and shows their weaknesses, resistances, and types that
        resist their moves.
      </p>
      <p>
        The tool is deployed to{" "}
        <a
          href="https://danielsoftware.vercel.app/pokemon-team-calc.html"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . The source code is on{" "}
        <a
          href="https://github.com/dkhl65/danielsoftware"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </p>

      <img
        alt="pokemon"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANuyYAAAAAAMIMBOd2Hbx2r1s?width=911&height=1040"
        height="900"
      />
      <div>
        An example team from{" "}
        <a
          href="https://youtu.be/KO8lULmnnOM?t=1077"
          target="_blank"
          rel="noreferrer"
        >
          foofootoo
        </a>{" "}
        has been put into the tool.
      </div>
    </>
  );
}

export default Pokemon;
