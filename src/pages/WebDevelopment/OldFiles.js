function OldFiles() {
  return (
    <>
      <h2 id="oldfiles">Old Files (2009-2011)</h2>
      <p>
        I expanded upon JavaScript and HTML examples in books that I borrowed
        form the local library. I have included two of my favourite examples
        from below. More files can be found{" "}
        <a
          href="https://github.com/dkhl65/Web-Development"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <h3 id="numbergame">Number Guessing Game</h3>
      <p>
        A simple game I learned from a book and modified to add more features.
        The computer generates a number between 1 and 100 and the player enters
        a guess. For each wrong guess, the computer provides a hint of whether
        to guess lower or higher. There is a time limit to guess the number.
      </p>
      <img
        alt="Number Guessing Game"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANiCYAAAAAAKRstSHIp9s_lew?width=442&height=295"
        width="442"
        height="295"
        className="framed"
      />
      <h3 id="customized">Customized Page</h3>
      <p>
        A page that can be customized by the user entering text and colours. It
        was made from a book tutorial and modified. The colour can be a
        hexadecimal value or a colour name. Text can be added or removed from
        the page.
      </p>
      <img
        alt="Customized Page"
        src="https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANhyYAAAAAAHob9U7kho2p0p8?width=592&height=423"
        width="592"
        height="423"
        className="framed"
      />
    </>
  );
}

export default OldFiles;
