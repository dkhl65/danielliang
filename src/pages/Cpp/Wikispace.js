import Gallery from "../Gallery";

const wikispaceSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANeyYAAAAAAOMGjwcfI5vb-v4?width=1712&height=1017",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANdiYAAAAAAOANjyDI8mb0u4Y?width=1711&height=1017",
];

const wikispaceCaptions = [
  <>The Simon page with code.</>,
  <>A page for the infrared signal receiver.</>,
];

function Wikispace() {
  return (
    <>
      <h2 id="wikispace">Wikispace (2012)</h2>
      <p>
        In Grade 7, I made a Wikispace for my Arduino projects to help
        classmates who were also trying to use Arduino. Wikispace is like a
        website others can edit. Wikispace has closed down, forcing me to take
        my pages offline. The HTML files can be viewed{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhl8n32Y7BQICScfF"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        , which have pictures, words and code, but the background graphics are
        not visible.
      </p>
      <Gallery sources={wikispaceSources} captions={wikispaceCaptions} />
    </>
  );
}

export default Wikispace;
