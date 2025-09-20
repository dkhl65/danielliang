function ClashOfClans() {
  return (
    <>
      <h2 id="clashofclans">
        Clash of Clans Builder Base Tall Grass Editor (2021)
      </h2>
      <p>
        During my spare time, I used jQuery to create a tool for planning tall
        grass patterns in the Clash of Clans Builder Base. Up to 50 squares of
        tall grass tiles can be on the base at a time. Tall grass always spawns
        next to existing tall grass, ancient barbarian statue, or old barbarian
        statue. By forcing the tall grass to grow where desired using buildings,
        walls, traps or decorations, a design can be drawn on the base.
      </p>
      <p>
        The tool is deployed to{" "}
        <a
          href="https://danielsoftware.vercel.app/grass-editor-browser.html"
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
        alt="plan"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANvyYAAAAAAIJmqWhs81akVY4?width=911&height=1035"
        height="900"
      />
      <div>All 50 tiles have been used to plan a pattern.</div>
      <br />
      <img
        alt="base"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANvSYAAAAAAAoaLNiHPwAuE8k?width=786&height=459"
      />
      <div>The pattern has been implemented in my Builder Base.</div>
    </>
  );
}

export default ClashOfClans;
