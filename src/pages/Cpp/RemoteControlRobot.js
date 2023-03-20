import React from "react";
import Gallery from "../Gallery";

const remoteRobotSources = [
  "https://sat02pap005files.storage.live.com/y4mHvFaUUEpxZQhS9s_vWrf3fG27N4zgtw3JbDP_-bTBrS2yWcTen_xTeq7nHlrMs83ynEbnsZ2Zhkz5KQXPkthscj__ypPPqem_HCY9GdNyxyC6xWWYHE_Y-Mj967ezRjHfLx93oyVpVAd7x4TfVF89V064SHr9FqOD2PvE4ii9QeEFk5rrUpiIHFdoUYXnKdZ?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mQD1E8JYM6HSSahdFc_JlVX2kYJnYQT7ofvzF-D1RtcPw9Mcvv55thvnpclwPOFdupMJa2pJWO29i4mcE1lamYb4q1Z3MQi1D6w6IYDXVHATMB9EkoSioi3sQucfFE0YBeUlx2oAzt9NNyqEps7uXXiPeZxUH6KDUOMFuHrghPAY_ebIDUORBSVXFRuDAqT-m?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mVbMAAwzHU9x6oq1cfsg_xg6NZDC1oZ-PUsRqE_OItjfuRokkd9X9_arbj7vM85zHx3U04HcYpYrgjTaKX_91wTqsAZsiHCBUTQDoCbwu9jLGMGnFy6zmOOX-_mO938PjUxwKoUJO2O_gVZfFxwGwFSt_JJs3i7CytNcLvmUh62jbw6sVLbdqZVbkvVZ5Dw2Y?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mgO7Q0UL9xapc0-VPEADG2xM_xclqgaZCjrQeQA-aff4B5bxljSmzXa911FwCYrQHCOG7KrBsB2qpBtixg4Ft2sKyrOSaOhwwAuQweJRK2eOt-u0yXIHXTws5UlY3NmvW8dKBp0LJyT8DgDV5ZCVgll181ZgrYAdAaoA9Shl5WUaDaOjNcUZZGv9kPrlKKkgs?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mw7xuvlrRbR6E-0ZCOJ2wOuhOn12swmUurZE6M-5kE9q3E9ypDsGgxU_DFZAShPK8IXF2QZL1HsZrk8tRLxXbyi9ytyzVVTn5Kc2S3SfOl1cf8aCxvvbaGqRxAqdwai_ktcqwRqIMGcx3AA4LKm9OyDg6l6ssvdLwFr7G8qe6-wJ1LwGmzzyQAjUNYdfB4yC9?width=2448&height=1836&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mPYSzpRYevuWUfDrYLTzhRTITLPAWQV_Jbvbl70HPtzQXU1LAR3hbTzGaas6utwgEKp48qK5b09G5DgyhhFVqxm2tlHfTAOCExU8EVXAbWn8frX37PuPXuDViFI5XREY-4DDKM5gmNEezNBBNGl0g7u4CWDAawJwLr10urFwnjpMcbUc_ytTX5Mll-F2xwdZa?width=3264&height=2448&cropmode=none",
];

function RemoteControlRobot() {
  return (
    <>
      <h2 id="remote">Remote Control Robot (2018)</h2>
      <p>
        I do not have the programmer for my line follower robot, so I decided to
        modify it. I replaced the PIC with an Arduino Nano and added the IR
        decoder, as well as a second set of batteries dedicated to powering the
        motor. The robot is controlled with a Sony remote, has three speed
        settings and can make noise by vibrating the motors. The project file is{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhlnYOp5slcDErvwM"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <Gallery sources={remoteRobotSources} />
      <br />
      <iframe
        src="https://drive.google.com/file/d/1I9em7jD5Shq9jBCwt-YuA88MqS97IYe2/preview"
        title="remoterobot"
        width="800"
        height="450"
        allow="autoplay"
        allowFullScreen="true"
      ></iframe>
    </>
  );
}

export default RemoteControlRobot;
