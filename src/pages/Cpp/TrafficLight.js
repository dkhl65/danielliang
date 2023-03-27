import React from "react";

function TrafficLight() {
  return (
    <>
      <h2 id="traffic">Traffic Light Model (2016)</h2>
      <p>
        For my grade 11 Computer Engineering Technology (TEJ3M0) final project,
        I made a model of a four way intersection that is controlled with a PIC
        24FV32KA microcontroller.
      </p>
      <p>
        There are four traffic lights and a stepper motor for a railroad
        crossing gate. The lights flash yellow in the direction of pedestrian
        crossing. If the crossing button is pressed, the stepper motor lowers
        the gate and the lights flash red. There is also flashing green lights
        if the advanced green button is pressed.
      </p>
      <p>
        The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Traffic-Light-Model"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>{" "}
        and the project files are{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmQYfkIAmTBRSqR4"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="trafficstreet"
        src="https://sat02pap005files.storage.live.com/y4msyvRhEhe3oWcLXfwXIdzeuShDxKDxwhV40qilfbAHRNEeJ9E1TmpNI1dgRsnPTLsAIZ1eYv-grddieMXyHIjjz4l-MXxkgbSH2oRXqiGeNt7FvwPT3jSXPXTpN8Off9R1Jc4K7CyZFVTxXH1EhzaFMqPzgSt9_patu7OhRTPoNHbBhDedUR8ZFPlbmaQUQYK?width=3264&height=2448&cropmode=none"
      />
      <img
        alt="trafficmodel"
        src="https://sat02pap005files.storage.live.com/y4mJwzzIUD5B560IrqwRr46awGEmbJsUFhhkmRb5qRiNmu6jAi-OIKYWl18IW-e14oC0phZedI9tmT0-VHeBzb_SEYwpdi3wpukgBoqQ-CQi4F_zoiZh2Oe8sXrNYevOUjkWhhTlFyv9bFLTCU1_Qj8OwOVAQinNP5Z-t-LIIAKug7nrAU-KVo-GWG0qzm30LIO?width=3264&height=2448&cropmode=none"
      />
      <img
        alt="trafficcircuit"
        src="https://sat02pap005files.storage.live.com/y4mJ8fTkWTAMpOtc0SbgEE4L6Nxdbdly64BGvJvMNSxk2MmwWtzMvbum0djIQWxRgKTKhbL9jUfz0wRdsL_ASxUpY_dqT1FNNaz5dqmYsG3Q-E1-GRnCqyRh3s0i0ztrnLYKkesBMK7gZ6GwrLbVCaL4SrjvLuIAX6h_UDNU9b5YYL7WYO2sD5KGkEX2ZKbJCk5?width=2448&height=1836&cropmode=none"
      />
    </>
  );
}

export default TrafficLight;
