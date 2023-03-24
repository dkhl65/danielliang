import React from "react";

function IRRemote() {
  return (
    <>
      <h2 id="irremote">IR Remote (2012)</h2>
      <p>
        This is a universal remote that records an IR signal, stores it in
        EEPROM memory. It can broadcast stored signals. I got source code
        online, then modified it to include a soft potentiometer to select the
        memory slot of the signal to broadcast. The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhl3dO38Hby_D_MCY"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <img
        alt="irremote"
        src="https://sat02pap005files.storage.live.com/y4m08rsw32YnJaFvhZn_1aaNPPWNKnXRxFEb1KKB1BPH3lrEIRwWgT-CvKLVPVXOU4fbxzrD0Xh1sq4DeQ5sNKmHCmwC_Qr_4k4LdMNjuHgVkXwcDgwRd_Tzys_u9rqFUlhLC2KXeMFyJ-PsIzvrfTLhpVXLD-8DjRGu3XmSuYLpfIIzKxcKvNwlBt7XmdtwXa6?width=2592&height=1944&cropmode=none"
      />
      <div>The breadboard setup with Arduino.</div>
      <br />
      <img
        alt="irremotecircuit"
        src="https://sat02pap005files.storage.live.com/y4mBY-0tYzmne6X_pB9ZdKa8har4KWjj84BJ6vbhPrzZXdCmPQpIgKKQMJe6aF2V_B_gLFmZbnOIJbX2X3mwUDFdPwi-qJ9rr_oufG5rGlgYUSt5KAC0q0eZMHik1_N-FHBaLKbAGPQR71PIrVXRKk2Mv2qQQkt84AJQzPfhhGZU7ztN-lfqnROyRlPlOweX7Ji?width=849&height=609&cropmode=none"
      />
      <div>Breadboard setup drawn in Fritzing.</div>
      <br />
      <img
        alt="irremoteschematic"
        src="https://sat02pap005files.storage.live.com/y4mVRmOwjjOyZodFyBR9xXNvR5icLNLaS1od-m3lHBN8Ou5RANdeMEjtb0EYra7OVNc0EwqG_lmWbmbCZNLws5SAiyePuOmsxyqH4BIg1wLT8fbcxoGlARNSvUw1ZSEt3mZyYC_VEYiTn9WHJi7EB28g_NPHIilAUcRo8jm9eNk5W6GeDj58neyGuJnRp8h3FtB?width=990&height=564&cropmode=none"
      />
      <div>Schematic drawn in Fritzing.</div>
    </>
  );
}

export default IRRemote;
