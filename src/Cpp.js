import React from "react";
import TableOfContents from "./TableOfContents";
import Gallery from "./Gallery";

const zoomLevelSources = [
  "https://sat02pap005files.storage.live.com/y4mm4dzWM4c84wJMPPJkKJ_BOw4g2haCOqXkR6UDMXhe48N8s3xowMbFfhuARJkQeNJF2Fr-6tMouiN0v1qQGkkWznEhFBYUhBvEjphPRIOV5mjCr7FujGoLD-UA7hVYihQMHtpL6UwSXe4e-Ef1oI8WtncMOs4-hEsrYjBJCdVz5liWxorRCo2dpYJQhgw4382?width=766&height=600&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mFOdrQhgLBh9752UYthDwxg5vVX0PoPVxmmcjuIXk_yjWdfCl2VPjjJq7rjNlP_PocAS7mtYyMBTeliMF9qBhfW9T4yKaWfqw6fwPhxDLJAG7TrhuSR8fPruB_7uLGir4C8ajCxilqrj1vP1f9WyUsMrb1rlztI_85il7Ayxu5a4FuzOFFnbjpBGeRvsYs7bl?width=767&height=599&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m51phkMteutpCzmKs6x7VG3tYipntEWhdZQd6v1jSyPyL9zsdgqMXCl8DeG7k2CuF5XB3L2_HuXkIO1YjAhtEZGbxlYNbuBfk3AIfbUcNWXcmWfTURNOXFHz9mOisXzNiOWMUFZEVZshFir7Ma6oyubFfbsGKy6GzCz7Dj8HczSK1YFwkuulGl98PHM82jwh6?width=766&height=597&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mvJJb8yak9M16YkA8ik2v_ApST63IGKkd_Js38tkIlupxBzB-nF2Dp-B1ZQ6jA9HNLaKzZoxHPLU8ktQLiACC6A3lIX1BZLIs_poldsaV6aDqPb1lsuYB9Q-o-I39gEUbw3lPMCAG_xW78CADSUSlSXLCYRwsPMpMzJ-dzAXKOAMMRWMw4NWVm41jQ0-7NpDp?width=767&height=599&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mP4WVP2FwzaMiv5DIk49luxQ6T127wzRX9xvUj_i__fPw9q0LRrnfpqfzRKzY65Ee7SgZqQi1K4_24Mwez8OsTvFJW3Bzqg_fBnYH4PqCEJsfICCoRVM1Ky90ztbFG-nFZHmh8FtbfjSGecNJl12KXSNV3vtUGspOBExNzqjmf0DijllxI9qfiHM9Uzm4JqzX?width=767&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mcF5s9aDumubbx2eXbxpj2jRJCKE1w7IRCcDZUNPMybmpMq6uxpc4CUpX_9BuSjgTjvxLpF3ttDhnHGQWrCyTYxJqukYkAnDgOv1w1S9oJy33CvAC5yZYjDacAJWDgBNSZRGoRup0gehtTyG-UYKbqMsaYpcZUWGmOFlqsfBi87INIQkvwhwKSDbgsqmuV6Ug?width=767&height=599&cropmode=none",
];

const exploreSources = [
  "https://sat02pap005files.storage.live.com/y4m8w3k2-0JucpIfzVrshwfZRzQUm_j6aK47JOdtXFbKIel5cmljqMKGXESarp6w-GiiFw8_y-YRaqYbndXNbURgsp3kJaE2v5Wgvu0SMWUT8exCmmtLOPFA1XHXl58bGe6Jsz56MWQMBDtvwIJNo-UaUDScYju4Ql8V-m3-fnmPCYf0jYZeUODmSHhcdZOSnyo?width=764&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mB8rbwZmCb_gaOA3wg8QDlmyQ3DAZXCBpHtAWCvR-UpROw2a3tAqvVggp0hDLSiEH2EjSkinjO8MN_RUZENNjyN3IO9Vmf-JPM8WHPOS1VgxwekZj0ydfB_j7hAVhJWRN8xI-WkEti8KXG-DVbZMUJYrZHhRLLs66kBd0LoW7tMOQbqD_DuIQR2qPfnCMW_J0?width=765&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mNOuQ_8J5cVAjesuBYvhMH6ftg7wMKNW8RsW7vxLkEuGdeVPZAeYuOB4tUAq3Qr8Od8ba2l3ddwZAxhQz372eGPiDbNtsmatw1nPtVxci3qPpSyQuoCR8Lm87Wtq8grksw7dygIlOq6S__Ju-dVFPMzLbNQj0tc8fEZ1NhTQ39bhjWxIqSXljcOcN_JAQOi0X?width=765&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4myiUoP9ghb9Y4sVkWkPyToHSV7JtU2_dddrOyTmnVy5tuwhTsr4BsTHyfYIy3H8J0S-WwhshmRMlXMOFbMBdvyuJjOHJFty1ZzV6RaqV3T6Wq9B_aSG4VqiZ9F_MPnHtvzjjs4L2hROu6zVXTnKZoCJunKf49dLxwlqcKssgqoa8ni50eyaWxufkyTuOKV66l?width=761&height=594&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mMKieUhmzD_Iuifc0E6QcSul3yorXgiRLSRcUmp2uO7jjSTeIqp_6JvUn_lxqAUV3eXPBv3MnoMwmQIEKyxiHWqdWbcKJvw1Hinw0aAJHK9kweeg_9Vw_Y7iPGorn0Zqk1vzS972LGhTf290KA1xiq4CA4zCRLR2G8yBh8ZZqEPMpYJNeVjZxAiNULi5ikrFQ?width=766&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m9h3Lz0NWNCHJL86IbKFr5vfc9kf5FebCZIgQqrm5uc3pPSXTiqQCkq7F8ojzRhXgsgL5URwZtPoG3rEq2MhEFZDlRxymxdn0EC7TMuYEGg8_GYkk9OwvJzrmmtthXBCtMct4i76zwohY7CgFC5Y3BzIbHMJLTz-NF_CwxFyKMA4OJHA7gyuJkaYxp51mEXs3?width=763&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mmZfXX4lz2N1oMmWVfQKVrZ8B2E6Bp-yhAHcCKCPnJw9wKgrmH7LNkz_swPBmKluW3JWpp2Q0uDsga8LtIZPbzMamHUnsu6AFHw80oyCFNi2x1m2VZ-XTP_TZPqXiRnOeE3nFoB8kTUTmgEk8XyOMYzAvrWWLemz6RjrynUes3aDCitQNrT_9yPt0vNxSfWSi?width=765&height=595&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m416ZX0KP9RcpfFFxGJl62AxhXB-gNjYpX9iBHCWQEVYb1SE33vaVdv2x0p6PD12ZEVwstt530FNkNUpw_PvTq_huJ2Ka4hCyUhYpAgDDiY8w_v6spgkG2p4Mdcd8HSrYg61G_SKTjzmqidXfC6E4o-e4fMD-AB43zDPZQFFstlUfg3IQpeBlMsnU_jf5lut9?width=762&height=594&cropmode=none",
];

const pathfindingSources = [
  "https://sat02pap005files.storage.live.com/y4mntr0o6nf6_RSvcX82iYB22cvxvL2D-J0JLS6RBQK0-QIX06VVVOuDjDYdyk9KSK5LabvHgK_apDd-Wxyimj3PlPXF1KzjXmQnUxItCWMpuD8YvObWCC4vc3hKKjZ24kaJKUhC7BReeOMTmexJviE4hM0oS6tuQEM9awpR0elqpYqyQWi6tB8hLZXVaRweQ6e?width=766&height=596&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m5x3a9IrEvZOoe834TKqGsyLtLnGDxOsrQXtHUkX0ndjvqvnxrJB91ys7hHMJXuXwRmngUEN7-xJTQk0-S1abKEqkIclgVSr_fbm43DqZywso-oeYt6ROcExzFgqPPqvqgtn-OcgqCOw54XpCvj9GuSgWNADKtowpA7xP6O3i8aeQ6Ce2oHVP-FVF1rRSw3Uv?width=767&height=596&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4meVFjIrkgqM5fnZY2RrOIm-1GhyfPeA4A2eViTNV_o2cWlCB_Al7xxDPp-qiVBFkQ2nCTIBoA_vZlEyVMs8_fSwLI1O3LTKlTnjiInt0D6iIqkEy6biT-Cn9ngwuFA3k1MRRt7uwW_HBbP810Xnn5bbVxiCUyQJU9J0Cx5Ptb35YPR043TSisK6h7DgQjNOJa?width=767&height=598&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mgVBgwNcH5lWmNik2YqaPNVahLoWS8_RAs4NJWUBT_obzJCLzrQFhCJ7CrJeuCMdjUWUPas8WvlNZSiudlrka1LUdwJlAX0Rbc2XHSr4JgFWFzgyAX4C5z7M1pcyjNTh2W2xjfHpIBXkQUCGR9xVf2PH2TTwGVG1Awwcbp9JWAze0Kf0nTBi6puJYDnuMUFpc?width=762&height=597&cropmode=none",
];

const remoteRobotSources = [
  "https://sat02pap005files.storage.live.com/y4mHvFaUUEpxZQhS9s_vWrf3fG27N4zgtw3JbDP_-bTBrS2yWcTen_xTeq7nHlrMs83ynEbnsZ2Zhkz5KQXPkthscj__ypPPqem_HCY9GdNyxyC6xWWYHE_Y-Mj967ezRjHfLx93oyVpVAd7x4TfVF89V064SHr9FqOD2PvE4ii9QeEFk5rrUpiIHFdoUYXnKdZ?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mQD1E8JYM6HSSahdFc_JlVX2kYJnYQT7ofvzF-D1RtcPw9Mcvv55thvnpclwPOFdupMJa2pJWO29i4mcE1lamYb4q1Z3MQi1D6w6IYDXVHATMB9EkoSioi3sQucfFE0YBeUlx2oAzt9NNyqEps7uXXiPeZxUH6KDUOMFuHrghPAY_ebIDUORBSVXFRuDAqT-m?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mVbMAAwzHU9x6oq1cfsg_xg6NZDC1oZ-PUsRqE_OItjfuRokkd9X9_arbj7vM85zHx3U04HcYpYrgjTaKX_91wTqsAZsiHCBUTQDoCbwu9jLGMGnFy6zmOOX-_mO938PjUxwKoUJO2O_gVZfFxwGwFSt_JJs3i7CytNcLvmUh62jbw6sVLbdqZVbkvVZ5Dw2Y?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mgO7Q0UL9xapc0-VPEADG2xM_xclqgaZCjrQeQA-aff4B5bxljSmzXa911FwCYrQHCOG7KrBsB2qpBtixg4Ft2sKyrOSaOhwwAuQweJRK2eOt-u0yXIHXTws5UlY3NmvW8dKBp0LJyT8DgDV5ZCVgll181ZgrYAdAaoA9Shl5WUaDaOjNcUZZGv9kPrlKKkgs?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mw7xuvlrRbR6E-0ZCOJ2wOuhOn12swmUurZE6M-5kE9q3E9ypDsGgxU_DFZAShPK8IXF2QZL1HsZrk8tRLxXbyi9ytyzVVTn5Kc2S3SfOl1cf8aCxvvbaGqRxAqdwai_ktcqwRqIMGcx3AA4LKm9OyDg6l6ssvdLwFr7G8qe6-wJ1LwGmzzyQAjUNYdfB4yC9?width=2448&height=1836&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mPYSzpRYevuWUfDrYLTzhRTITLPAWQV_Jbvbl70HPtzQXU1LAR3hbTzGaas6utwgEKp48qK5b09G5DgyhhFVqxm2tlHfTAOCExU8EVXAbWn8frX37PuPXuDViFI5XREY-4DDKM5gmNEezNBBNGl0g7u4CWDAawJwLr10urFwnjpMcbUc_ytTX5Mll-F2xwdZa?width=3264&height=2448&cropmode=none",
];

const sumoSources = [
  "https://sat02pap005files.storage.live.com/y4mf_9epOmBDcqx0DhomsfM6rfpMfdmRy8zzSh-hYNvoOSSs1V6755Ehn09yrP7OHR_ZT3ORIMUk4WX3Z7X2rIPbTCXbLRFv5rMUGTCfLRfPBjCvTPj9h3ZPyG_gZHcauwLn2sYDbe4RM_lxogjzp4Vp7RRxEC69oKgOgJTPPtx0t-zMBZOsu5mDr1KSe0LoKFH?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mrircDQFjR9tdHdBifYmXzrLYTkbZzgubR7GNHzRA0DaKVVMygCUdGR5iYpsiYx5LO_GviDVOyzastEMop2kP6-oK6I0C9D7ivTm3fSPMnjXaLFTdU-yYl6MOORMvK_cDILaP2nRPHcONKSFOdBEZuZgt6AVU58kS9akIbYd-PJaLsxnoUWzag8TIU_ojfID-?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m_4SI8Tc_r1SzZCo42aRoi33AUW9tvyJDv3fikRefMrKEs_ZIUzZtogoiB6geAG8kYD5QyRRGvToAepNEQEo0h5F4Kc5YJOq4r9j1EH8Hz24Fy2fzMH9NzuxyoonaJwxEeuA10WNbQyjfFOVUWFiC95RWDoUdTBpOtnReH2Wq30dXKR-84hCRDrKja7dCPRgn?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mTaqD8x3r4AKANBRqtymskCUKFsf7-C2eVgV-Rv0WfL8M1FPhQPZ4B1OHU4GuxAEEM_wcyBt_OaxTutAysoo9JVrJn2Zydsr8wk6NrruhRj8F0ocYr1e5vRpkFE1iWtZ6m0deEW0xzNSkZ6hs-ddij_c_tgdHQh1xnchJSjM9qqoOzY4-_gIznUfyIzYfejnv?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mtOFmclDXT3NpXQSclrc8fH7P9cz7IX7SVraA3XbZ4VTtQsD-gLzYVwHvGh71ujBxfHKtYKNDK9eC5Co4Oojt8KByhK_uMHnO-zIwmpt6ZDIVLN3DSfJvdp5FftVqHZ0RSlYgTrJJ8jhxy80SN9u3IZc27mg4x8zmq7S--snFzirxIT71B1pCcXlRDXEtlQT8?width=3264&height=2448&cropmode=none",
];

const lineFollowingPictures = [
  "https://sat02pap005files.storage.live.com/y4mxiweXJQ5-qtcPCL5NI19oMR-cLOJs-KsuqjkDAy4PTsfk_pTnENRDBhqo2m-uOOl9A7xFXqDIiYZx0UnsmxXBOntpWFPhNKDhZMGza0Gc8eAusKP-7ne_I5QgkvAsTRsWFovh0r8At3LdRz0feK1JUwYwyUDHUZDC_JYGEvfH352bn41n202sFBtdKb8GjDr?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4msyg9lZFT7Fm5TjfsoVoYCpBt0nZ-BCLbvsoWWq2SLLlL-h8K-ZYJZdADYdJ8NPVuLoOIz109YDLC_0R-edQiqdwSzsT2MqXvxgeVxiHQcURrhbqFXPq_qXuhPD8D-P_zMQlQb2AI4BwC54Mtby2CiCb_pEXsUSzq1f6J87VKJ5K5cNr-vRnmk40qrnIHhnUZ?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mMczPgABL8dlkNL8jFLvm7ZhG2-OSJQw_rG91DMVb0P3KV69cVaF7OmAtJxqCX5YBB-Br8Vt6qmQKUsELliRV7Yr7dEHRFNnlklsmVL-pfjBXiSZP74DtdNliLKJ_eX13EvfMPDbZ4iFiN76Nn4gn3MfPzhESvC91SufcsAV_cOWKjcIYyP962ON0Aigj_-3h?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m1hmcR1eOvRXJpoSvAKZJn0u-2D61hhM3bOpO8ZTmNsqXp79CtQZJyoRBiqFLvYkPlUi-h7S5NOTpMENxm5Ykb-Wumk_icyLIfMjqgTnQKVZkbwVBIKWr86A6pyJ51yqsy-fEXgt7zatYQQd_FFH4iugohkJyYvND1FotY4dwjCICCCYOFPPJcvlLyQkKgMYU?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m3QvbclBI89YL6ZGWVawzy1viEwcue2Ql6wJj6D6gO81blSJE_PQhIYcJrZODfG_xQ_VqIKsVXazOpU1ye0j5BY1mk8dmlZ6CrUT3lx4TyYVNiyIkCNRwO7uoTi0wLmaXm2jYNVfwWcLF4qwCgAn_sKKnxtaJd_2Ck8Lyl8WKzd0o7_skBsJBLqC8Egyrs0Rk?width=3264&height=2448&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mKLdFSu7ph6xKVAPQh2ZvgWT52am7GtijlK7NDiPSlm-FNWQbPCJnd4jaXVVouwevKOVwWarxsHuUGR8wPysii4l38LxxP1E0mIbNs0KJDuhzXLDxYxTlQuTZ87XXAt6KzlLPFCH2RS3FzJXjRYuZwuuYYS_zV2jCIM5UYx868dkPvTDG4nbbSLHIxBkl47AB?width=3264&height=2448&cropmode=none",
];

const wikispaceSources = [
  "https://sat02pap005files.storage.live.com/y4m08GbZ-4RsTa1_l8_PmW1yzVpPSSkuXoEZXCsBlA91CIzYYzWwKrY2LzAcNII5Pu41vrw9i6v_lPPAFuqhY79qkPLhcmHx7R7A6H0_7hOTknmzKZXjUExG7gtNcBK6UP4BklW1xZKlLmW5PNaYZ6BOWUjg1VOgOxSzmLQFVveIMQdIl3lkUebM1-I9gEnDspK?width=1712&height=1017&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mn3WZG04DhqjgcT0MpPg8zlKpyOnj1Me-SqKc4yLXeQNCXdRIOvWXJU_buZR3rZNeyAZGKeaVRhpAVOWKCCEY1fon2CJlex6oIU4dfqCf9Jeaf6KMEyoOlfjXQsTy9wNtkrpMLSO73ecYERp-N1hG9Yb7v0H22oG_d2lqljK8Y5QbbVVHQj6TxjWSteoyjZhO?width=1711&height=1017&cropmode=none",
];

const zoomLevelCaptions = [
  "Map of Toronto zoomed out.",
  "Zooming in makes the 100 km/h highways visible in orange.",
  "Major roads are visible in yellow",
  "Zooming in some more.",
  "Minor roads are now visible in grey.",
  "Zooming in significantly shows buildings in purple and points of interest in yellow. A one-way street is indicated with an arrow.",
];

function Cpp() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>C/C++</h1>
        <p>
          This programming language is similar to C++. Is used it in grade 11
          and 12 for microcontroller projects. It was also a required course for
          my university program's Computer Fundamentals course. This language is
          simple and close to hardware, which means the language is
          straightforward and does not have many behind the scenes processing.
          Below are projects I made with the C language.
        </p>
        <h2 id="citymap">City Map (2019)</h2>
        <p>
          This is a project completed in the second year of university for the
          Communication and Design course with two other students. It is written
          entirely in C++ on a Linux system with Git, but the code cannot be
          released online due to copyright by the univeristy. Most of the code
          was written by me. Using map data from a bin file, we displayed
          graphics for features of the map such as green spaces, buildings,
          streets and intersections. Intersections and features can be searched
          using the text field at the top of the window. Paths can be found
          between intersections. In addition to the map graphics, we also
          developed an algorithm to find the best sequence of paths for a
          delivery truck to pick up and drop off packages. This is similar to
          the famous traveling salesman problem, but with extra restrictions
          such as truck capacity.
        </p>
        <h3 id="zoomlevels">Zoom Levels</h3>
        <p>
          Streets and text are hidden until the zoom level is appropriate.
          Zooming is done by scrolling the mouse wheel or clicking the zoom
          buttons. Streets are coloured based on speed limit with the faster
          streets showing up first.
        </p>
        <Gallery sources={zoomLevelSources} captions={zoomLevelCaptions} />
        <h3 id="exploring">Exploring</h3>
        <p>
          The user can click on most features and intersections, which display's
          their name on the status bar. The user can also search for
          intersections and features by their name. A map of a different city
          can be loaded from a bin file by entering the file path into the text
          field or using the city name and country name.
        </p>
        <Gallery sources={exploreSources} />
        <h3 id="pathfinding">Pathfinding</h3>
        <p>
          Dijkstra's algorithm is used to find the best path between two
          intersections in the city. Step by step driving directions are
          provided. The path can be chosen by typing the names of the two
          intersections or by clicking the two intersections on the map. The
          pathfinding takes left turns and right turns into account and avoids
          turning when possible.
        </p>
        <Gallery sources={pathfindingSources} />
        <h3 id="videodemo">Video Demonstration</h3>
        <iframe
          src="https://drive.google.com/file/d/15YlgMxjCh6RNn0AKn5czEt2JVZX0_1Zc/preview"
          title="videodemo"
          width="800"
          height="608"
          allow="autoplay"
          allowfullscreen="true"
        ></iframe>
        <div>
          A demonstration without commentary going through each feature of the
          map app.
        </div>
        <h3 id="traveling">Traveling Courier</h3>
        <p>
          This algorithm finds a good sequence for a delivery truck to to pick
          up and drop off a series of packages located anywhere in the city. It
          is subjected to a finite truck capacity and 45 second computational
          time. The initial process is like Dijkstra, but searches the entire
          map. This process has n log n complexity and uses multi-threading.
          After it is done, a path from a delivery location to anywhere on the
          map can be found very quickly with the O(n) traceback routine. This is
          important when the entire courier path is being constructed and
          rearranged. The second process is Multi-Start. The first phase starts
          at every depot and travels to the next best delivery location based on
          travel time. The best path from this phase is passed to the second
          phase, which does the same thing, except that it has a 10% chance of
          going to the second best location instead of the best. There is
          potential to find a shorter overall path this way, even if one segment
          is longer. It repeats this ten thousand times. The third process is
          random 3-opt. Four consecutive delivery instructions are randomly
          shuffled. This has the effect of disconnecting three paths and
          reconnecting in a different way. It can help undo paths that cross
          over. This repeats until the 45 second limit is over. This algorithm
          has been tested with orders of more than 200 deliveries at a time. The
          results of the contest are{" "}
          <a
            href="https://ug251.eecg.utoronto.ca/ece297s/contest_2019/final.html"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . My group was an-345, rank 16.
        </p>
        <img
          alt="travelingcourier"
          src="https://sat02pap005files.storage.live.com/y4mZZ0XU5cIeTHZN7Q3YjRnuT-Qm2QtQEkp8lIi5F7rnCTkH-So82FwPTIULGzuzTbqqz41OHxMF30Wp1vNRh7i0Pz9ZnAL4mzQKtWgHjaauZcgHeqBr_RdEapI11WgTzfRWHXFyTStXV9PFhB3sVlDy8uEii4ZW4XQMcxoTUVRv3ctMSMVl11qr3jVQ9AkihwZ?width=1321&height=384&cropmode=none"
        />
        <h2 id="remote">Remote Control Robot (2018)</h2>
        <p>
          I do not have the programmer for my line follower robot, so I decided
          to modify it. I replaced the PIC with an Arduino Nano and added the IR
          decoder, as well as a second set of batteries dedicated to powering
          the motor. The robot is controlled with a Sony remote, has three speed
          settings and can make noise by vibrating the motors. The project file
          is{" "}
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
        <h2 id="sumo">Sumo Robotics (2017-2018)</h2>
        <p>
          SUMO is a type of robot competition where two robots try to push each
          other out of the ring. I worked on this robot with two other students
          throughout the entire school year. It has two motors, two wheels, an
          ultrasonic sensor in front and a line sensor at the bottom that
          detects the edge of the ring. It is controlled by ATMega328, which is
          the brains of an Arduino. It is programmed by detaching the ATMega328
          chip and placing it into an Arduino board. The power source is a 9V
          battery with a 5V regulator. The project file is{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhlqdHT9PCcC2BQ83"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          alt="sumocad"
          src="https://sat02pap005files.storage.live.com/y4m62h6ZE3K-5bx-Jzn8wsfs1p20NPTL1aAUzOuk7eFWEnhPNfSNTumhMEOX-Fqf0kPwsHIN_R2mXn2UjBviiqyMprWZosY-PnQ2EhCaWzV-3m2CHk8TMLzONnmKRmoYysC0els7b7pA1CUZofOrwy0y6Bi1qqZgvEqTuu1OxFkQxjNppeNgVwAbR1y5_9oiF4n?width=1603&height=1131&cropmode=none"
        />
        <div>The chassis of the roboto was designed with CAD.</div>
        <br />
        <Gallery sources={sumoSources} />
        <br />
        <iframe
          src="https://drive.google.com/file/d/1Oz7C7E_jRXC33XM6d53Jbn_yzI2ZYkBB/preview"
          title="sumo"
          width="800"
          height="450"
          allow="autoplay"
          allowFullScreen="true"
        ></iframe>
        <h2 id="reversi">Reversi (2017)</h2>
        <p>
          This is a large assignment in my first year university course. This
          program is text-based and displays on the console with CodeLite IDE.
          It plays a Reversi game between the user and a computer AI algorithm.
          It also played my AI vs. the professor's AI, which is part of the
          assignment. The board's size is set at the beginning of the game. The
          user enters the coordinates to place their piece. B represents black,
          W represents white and U represents an empty square. The project file
          is{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhmM6V1vVMmXx6U5y"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          alt="reversiterminal"
          src="https://sat02pap005files.storage.live.com/y4mvZRfUmXVQtSAYSRa0MLKdNgSFHlXemjBCWqW57mSntpn5z_Y5e3Y9rTwiLXdLSCLJqT1e3odsrxz8bhDlftoLG_SFl73cSk4K5CdSZHpQsimTZUrxp-_LRHlj_45wW-VfE3rExDp45rwd5p1IFxp74LVblVmIHfHXhP7cTrAIDs8wCFdeiIoNddLNM2IBacR?width=605&height=438&cropmode=none"
        />
        <img
          alt="reversicode"
          src="https://sat02pap005files.storage.live.com/y4m9-igQgis_jSCgdRhOao8tFmCr3db4KxKRbdavH0M-Fcu1ZwxteRB8u0DDbckp1RsxyQkVHDOaHSkm9oDR5dF87avd2Ze4dKSQ4w_pXyy4BOfcD9DxEwb-TNK04cG6sIK1YUKCeLUPmZ-NUgdN8fz_a6joCc0GcQlOEFdBblIrRWN_YfLcax-fFYUITsgu_0r?width=786&height=593&cropmode=none"
        />
        <h2 id="simon">Simon (2012)</h2>
        <p>
          This is a game where the player repeats the light sequence that the
          Arduino shows by pressing the buttons that corresponds to the LEDs. A
          long time ago, I found the source code for the game online. I modified
          it to improve the musical sequences. The original setup can be seen in
          the old video. Recently, I made a version of this game that is
          controlled by the ATTiny84, which is a smaller microcontroller chip
          that can be programmed through the Arduino Uno. I also added a volume
          knob for the piezo. The Uno file is{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhlvtb2fw_hX7kFc1"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          . The ATtiny84 file is{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhlxXQv0tVA1TNywx"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          alt="simonphoto"
          src="https://sat02pap005files.storage.live.com/y4m4NdgpW6lqU6zJTzYVGftj3KIHPBjOrQ0DdOmJhOPOo6ZJpmeZ0P80AtpovD-yx2tngLp9qQivwKHDgkkg6xGjswQVEpHkfhcVowUbOORN4ufkC09SGaK5mjwuymEUnTvGtlFXrBhK8HiwBSvZPk1-_dOddq2T-_kIccpbxPgn3worHIw2k21XfB5tga9U3vP?width=3264&height=2448&cropmode=none"
        />
        <img
          alt="simoncircuit"
          src="https://sat02pap005files.storage.live.com/y4mPbUg2t8chqIWGI7G8Q5rXoDyzd3XqzUOxmYIaAfG3EFG0sS39SDMUHdIQ235lso0RRowikn_sTYtu2-gdMN5QDLChKAULx6rz_ToLFstyaeQXW5eEfvxPKhMAooAGRwTgJ5KwploExrwR7eC6SmJarLDZCDU_1XVepBNk9ND3SOKQPn2qrEyhYwybw_fHuF1?width=845&height=581&cropmode=none"
        />
        <img
          alt="simonschematic"
          src="https://sat02pap005files.storage.live.com/y4mEQMSGYFThzmgoxWp5yE3kQqCiFKbkn5r9UqPVUgpvkz1YromV5ZA8cWc3gY218nkesmHSgVlxkfhznc-SsTi-fn57e8NIylLt32e7tGfDIXzqPR8awv8yPugKYkLA4qs0v8cjps0NbwRUJpV-xF-w72azhFTNLvjMRop5yzIt7EcZfuEFX9lP1ySRqX_wS2-?width=867&height=561&cropmode=none"
        />
        <iframe
          src="https://drive.google.com/file/d/1Jk-3ZqRJF-BUz8v3b0fxc92w9tJCn-7d/preview"
          title="simon"
          width="640"
          height="480"
          allow="autoplay"
          allowFullScreen="true"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1uPc9gaRuindPLJ79vAO0_t_egC_7Ph2W/preview"
          title="simonattiny"
          width="800"
          height="450"
          allow="autoplay"
          allowFullScreen="true"
        ></iframe>
        <h2 id="linefollowing">Line Following Robot (2017)</h2>
        <p>
          This is the final project of my grade 12 Computer Engineering course.
          The robot has two light sensors to help if follow a black lines. It
          has to recognize black line patterns and navigate a course. I was able
          to complete all the challenges with my robot. The GitHub repository is{" "}
          <a
            href="https://github.com/dkhl65/Line-Following-Robot"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and the project files are{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhmWqsD47aWU5qdWD"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <Gallery sources={lineFollowingPictures} />
        <h2 id="traffic">Traffic Light Model (2016)</h2>
        <p>
          For my grade 11 Computer Engineering final project, I made a model of
          a four way intersection that is controlled with a PIC 24FV32KA
          microcontroller. There are four traffic lights and a stepper motor for
          a railroad crossing gate. The lights flash yellow in the direction of
          pedestrian crossing. If the crossing button is pressed, the stepper
          motor lowers the gate and the lights flash red . There is also
          flashing green lights if the advanced green button is pressed. The
          GitHub repository is{" "}
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

        <h2 id="irproximity">IR Proximity Sensor (2012)</h2>
        <p>
          An infrared phototransistor picks up infrared light from an adjacent
          IR LED that has bounced off an object. Black plastic from a garbage
          bag is used to block visible light the the phototransistor and let
          infrared through. The sensitivity is adjusted with the potentiometer
          and the piezo makes noise when an object is detected. This is an
          original project idea that I thought, inspired by hand detectors on
          hand driers in public washrooms. The project file is{" "}
          <a
            href="https://1drv.ms/u/s!Arlw0YD7zqYNhl6ipT5R-ZX0XKi5"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <img
          alt="irproximity"
          src="https://sat02pap005files.storage.live.com/y4mSAkLXJblSuy4QUKa9OhPCpYsQfpfc_iFXnEu57LT1zkTD7czAXq2lSIMYg_eJvefptLynk3xvbwbIasa9FxlqlV9QGc-Zr3QlfnIswJN2dP8FP7LoDKh3XvMp00Yz90eFglC-O5XgI4P0hMLTpR8weXArq7m8A6AU6uFv_SoZ1dIpp0GnjHKk2f8tFLbLWlk?width=2592&height=1944&cropmode=none"
        />
        <img
          alt="irproximitycircuit"
          src="https://sat02pap005files.storage.live.com/y4mDixt5VIJJojq6JgRQl1tYSYZYWAJ8BEGskK0MIwE227apyd2PM4JPCWFicff7itDcRs73SH1-fsjwX0cw169slP7pfEJN7ietIkZXl5FGhus2A8QVPr3AKL_1-DHuDyF1UwTighic1l0t7ZHEp48XADvRNCASicfGMmPjjOWzB88LaIn0LghO9wxOrlf5pao?width=951&height=614&cropmode=none"
        />
        <img
          alt="irproximityschematic"
          src="https://sat02pap005files.storage.live.com/y4mnC2MQZ-pgcXR1GJL82OMvJ82zDNI5UVdMZ2HN1pQNObO-UkYv92rVE-aMZyG1jrXwecQ8QXlrN1jeDVJWPYzzpUvowBDweMXDc-7crymBYXhjtEcmMr87sFnZA2hfMfpHxfb1_H75RcBk8jbsdVphflGwoKFCwfgzzFaLkFYp3T24QFoieH8_7AjgKSsZV8J?width=906&height=670&cropmode=none"
        />
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
        <img
          alt="irremotecircuit"
          src="https://sat02pap005files.storage.live.com/y4mDixt5VIJJojq6JgRQl1tYSYZYWAJ8BEGskK0MIwE227apyd2PM4JPCWFicff7itDcRs73SH1-fsjwX0cw169slP7pfEJN7ietIkZXl5FGhus2A8QVPr3AKL_1-DHuDyF1UwTighic1l0t7ZHEp48XADvRNCASicfGMmPjjOWzB88LaIn0LghO9wxOrlf5pao?width=951&height=614&cropmode=none"
        />
        <img
          alt="irremoteschematic"
          src="https://sat02pap005files.storage.live.com/y4mBY-0tYzmne6X_pB9ZdKa8har4KWjj84BJ6vbhPrzZXdCmPQpIgKKQMJe6aF2V_B_gLFmZbnOIJbX2X3mwUDFdPwi-qJ9rr_oufG5rGlgYUSt5KAC0q0eZMHik1_N-FHBaLKbAGPQR71PIrVXRKk2Mv2qQQkt84AJQzPfhhGZU7ztN-lfqnROyRlPlOweX7Ji?width=849&height=609&cropmode=none"
        />
        <h2 id="wikispace">Wikispace (2012)</h2>
        <p>
          In grade 7, I made a Wikispace for my Arduino projects and to help
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
        <Gallery sources={wikispaceSources} />
      </div>
    </div>
  );
}

export default Cpp;
