import Gallery from "../Gallery";

const toneSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANcSYAAAAAAMulNSqeajXh6X4?width=3218&height=2386",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANciYAAAAAANt_HbEJjcHBNxc?width=3264&height=2448",
];

const toneCaptions = [
  <>
    The note G sharp / A flat on octave 4 is shown on the seven segment display.
  </>,
  <>The VGA monitor shows the note on the staff.</>,
];

const metronomeSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANbyYAAAAAAHdMyU1aWnJYOO0?width=3152&height=2290",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANcCYAAAAAAJU8lgO-hMc78gg?width=3264&height=2448",
];

const metronomeCaptions = [
  <>The bpm number is shown on the seven segment displays.</>,
  <>
    The VGA monitor shows a scale, with tick marks every 10 bpm and a red line
    at the current setting. The names of the tempos are labelled.
  </>,
];

const tunerSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANdCYAAAAAAHnxzXydFD-g7TQ?width=3264&height=2448",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANdSYAAAAAAGr9LRVRZD0G3rM?width=3264&height=2448",
];

const tunerCaptions = [
  <>
    A test with a tone generator at 1000 Hz, with correct frequency detected and
    shown on the seven segment displays.
  </>,
  <>
    The VGA monitor displays the closest octave and note at the detected
    frequency, with a red line indicating the offset in Hz.
  </>,
];

function MusicTools() {
  return (
    <>
      <h2 id="musictools">Music Tools (2018)</h2>
      <p>
        This project was done during the last three weeks of the semester with
        one other student. The goal of this project is to use the DE1-SoC
        board's field programmable gate array (FPGA) to interact with inputs
        (switches, buttons, microphone, PS/2 keyboard & mouse) and outputs
        (seven segment displays, VGA, speakers).
      </p>
      <p>
        Since my partner and I have a background in music, we created three
        tools for musicians. Inputs are from the switches and buttons on the
        board, as well as a microphone. The outputs are a speakers, seven
        segment displays and VGA monitor screen.
      </p>
      <p>
        We originally collaborated on a private GitHub repository. I create a{" "}
        <a
          href="https://github.com/dkhl65/Cadence"
          target="_blank"
          rel="noreferrer"
        >
          public repository
        </a>{" "}
        after the project was done.
      </p>
      <h3 id="tone-generator">Tone Generator</h3>
      <p>
        Pressing the first button will switch to tone generator mode. The tone
        generator mode plays a solid tone in the the frequency of a selected
        music note. The note and octave are selected using the switches in
        binary format. Octaves 0 to 8 are supported.
      </p>
      <Gallery sources={toneSources} captions={toneCaptions} height="742" />
      <h3 id="metronome">Metronome</h3>
      <p>
        Pressing the second button will switch to metronome mode. The metronome
        makes a tapping noise at intervals specified by the BPM setting. The BPM
        number is selected with the switches in binary format.
      </p>
      <Gallery
        sources={metronomeSources}
        captions={metronomeCaptions}
        height="723"
      />
      <h3 id="tuner">Tuner</h3>
      <p>
        Pressing the third button will switch to tuner mode. The tuner uses Fast
        Fourier Transform (FFT) to find the dominant frequency in the microphone
        input and displays the closest music note to that frequency, as well as
        the offset from the ideal frequency of the note.
      </p>
      <Gallery sources={tunerSources} captions={tunerCaptions} />
    </>
  );
}

export default MusicTools;
