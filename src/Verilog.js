import React from "react";
import TableOfContents from "./TableOfContents";

function Verilog() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Verilog</h1>
        <p>
          I learned Verilog in the digital systems course in second year. It is
          a hardware description language, which mean it describes a digital
          circuit and it is translated into hardware by the compiler. It
          requires the knowledge of digital circuit components such as logic
          gates, registers and memory, most of which I began learning a the
          start of the semester.
        </p>
        <h2 id="musictools">Music Tools (2018)</h2>
        <p>
          This project was done during the last three weeks of the semester with
          another student. It is implemented on a DE1-SoC board's field
          programmable gate array (FPGA). It provides three tools for musicians.
          The tone generator mode plays a solid tone in the the frequency of a
          selected music note. The metronome makes a tapping noise at intervals
          specified by the bpm setting. The tuner uses Fast Fourier Transform
          (FFT) to find the dominant frequency in the microphone input and
          displays the closest music note to that frequency, as well as the
          offset from the ideal frequency of the note. Inputs are from the
          switches and keys on the board, as well as a microphone. The outputs
          are a speakers, seven segment displays and VGA monitor screen.
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
        <img alt="notename" src="https://sat02pap005files.storage.live.com/y4miFKfteoig3fknAZJSHIe4vxnR2p7GLxQ4YjM-_Ra03RKbM9o0KCZzfX2gNIy6mplzqE1CcVZOQt_VqEAHUaEwjXIcFULPswlDyuwHAvCOb92aKpOf1Rpy9KN6iQOmevdPORTYA8Gtne8opWNm3IjELHa7s6GehRHKF-j9dKb1TRu3Wo7Wxs1l4xGA1pRcrV5?width=3218&height=2386&cropmode=none" />
        <img alt="staff" src="https://sat02pap005files.storage.live.com/y4mu46XNmoHwOSwMWaKU4RM7ZCkIPwBlCJjU5XInl0NCeNfPktIc12QkcWcIU-WIC6YS10rwwYC2hb5bcf2QdacVxpTP_Ky0B-p0OgBCxYvZ5BkNmWnkDV_KykPJCVsCA0SOuKOBKZMOYM4lJhChARMuxBP5UEIhcX-xZPMjm_imj-LFRmxfVUTpzS7ZFLenSjh?width=3264&height=2448&cropmode=none" />
        <img alt="bpm" src="https://sat02pap005files.storage.live.com/y4mTomVe0dOKLSLn-3ZMXiyXHBP5Wbvrc0A4MQM7fZoQ7pN9jgb_fqoCtxBsgIa6fTK4bUoHsaioFHu19_NTF4yOCrVxHOTAJbqurE8juAjq-RGzS4P_3kKAwiHL6tiKwD62oUPGf3nuq1mZe1hUNyIOWeC0gpblrE9pBOJlcdDyGtW63YH66i6J9vrAi2BLgSB?width=3152&height=2290&cropmode=none" />
        <img alt="tempo" src="https://sat02pap005files.storage.live.com/y4mlLjnzH6c_aam5fJRjnDBOTOafPnCmSxzkuIwRTgIbH5vGYlIqAgKcwZ3-3Au5xUPEISEByeElyRsvl0z0PQl42Em9zU7SeRWZWFzyaIlH3T1PlzpMXr8IVTlVVG237s_2Hvpunhis8LshYz-lnCG97amHxRL69_iiSLTHBlXh4i1CKtkInXVTsuk98ObYUU_?width=3264&height=2448&cropmode=none" />
        <img alt="tone" src="https://sat02pap005files.storage.live.com/y4m-D7cnkq1V_oAT-q8TEWCooFpJTiFmd52dIwgJQ9ckGNSiFaK9gxSkOuupCmFCcqDo5mz315iLNE3bES1-lkhEweVaj_LI4g1jyuu9Fy8zecwxK5E2NTqHoqwhy3d8rWJgbsUATb40kp9UaqvozYDpTcsU8rPzP-KxptYEOnIbQgACwC7p2xubqTrd9bXtehj?width=3264&height=2448&cropmode=none" />
        <img alt="frequency" src="https://sat02pap005files.storage.live.com/y4mC7kURqV4EcI0eNEaTGPB-VLeHA-c8NwZPNKlzHPgMk6YGhP-rV0q_Ec1D3hRM2JvkTTupVERqLMio1pQw2kfnYVowHELmCG7Qfxwd2qR-TWtFZica5sV4FjAoqRHfSMiBnwFP3FLHz1mJQYfJ3SLxNR4rbXlMSWfUe3UlNNnQ0pQedVMBiuTCQoEYNXSmATl?width=3264&height=2448&cropmode=none" />
      </div>
    </div>
  );
}

export default Verilog;
