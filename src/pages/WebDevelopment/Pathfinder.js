import Gallery from "../Gallery";

const searchingSources = [
  "https://sat02pap005files.storage.live.com/y4mA4IQ201apKCDA0drZrcWxv0dCXNxO9hBWV6YRFvu86_qgIwGDKZRz_5FKEshU64dP4zaAwyLaOcvQ9EIDTUUIcL4c0nOptUFFXW8nbrjlrOl-L7BoglLajCAvQzA9urnAT8H3M2g5050irihEdK3wvpFUFHkDF1OU4AHn1dOPj6XUvTAP67WXXHP1c6DQLwl?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m84dbsyU5pQy30f5-FzAfBipQX9-apjls2nP4SbP3dAF5ECcxkYogMLC8r9Gf40QH-y_OWIAwq_VyhUiO_YmyEQk7w780gNgDgG2UPTNuD72BwByMfMKjkY7Jmk_VLZO6QYG5tJTgYrmyPbLeC0ofFh_MbdchNbqcPQ6yS7dGbNz7zJ3sw6m_yXKHepo31PHO?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mV0CU1A9tXw6HzQNNLSMJD8c_V7gH4OrRL9mxzl7cMlu8WUMqxONX4GcJRtFOdcUUMIE6C5U7u2GX2Hd0MQKqRDKBl1mmMHXZZIE7Wl4cGfOyxwX6zBc9VBypeWLi2XB67gF3HDtEvTJOV6hNQuRVeEkWnjNeKbcZDSj5LS5cU-055P8k59onYQftZp1qi83T?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m919VoXrO8eEc7uGCkyYyuDXI1wzkwUaEXHRl1D_xZTsALT-qdbLPymhADr1F9vboiUlhs8ZjOLvLvQbgZrC5Ujz0FAHiu_uulk4uuN9gnBp7e90WHyYg6ZJIu--wF7iWfCaXUGpvKKOgW7jPqiW1e2J6bfQquW9tyFNGVLzCwWI6XxneZ4rsFQaZKdI0aDR4?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mYgsLYFH26lwNSmKvbj3h0cwcgIpqk1eRg90hU6m7-lKkLkrSonprbd1BmcJeWkKOc5cV_MOnaHhqrmjNCHqF_uevKpQoEg_YHIxy-zv5f2s2u2P_Uq7PUmFzc_bk_izIdG1pROd0Zyx-u0Q58ibkebw1pc03kpNVIex3-pIWYcOW7v9S-B4pSVUY3DhgZybF?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mx6gMeyKzF4KFAeeJPKVtknjVB6s9gKTQsHst7lRp1mpElodMSrpYYtpJ_shrtD3d2t1URX8oZ60xwhiyXN07Tr1AqOF8mw9bT_JZH6eJpT_eMX7ZlWCGyMVa07XrKmNmmMtO5j8A_HwER1_-Reo1g2Mpw3FlG9EkOH6rSVhrU3e71-L6XWbPpBib3GoaR3dF?width=1014&height=991&cropmode=none",
];

const searchingCaptions = [
  <>
    The landing page of the app. The search bar can be used without logging in.
  </>,
  <>
    Courses can be found with the key word in the course title or description.
  </>,
  <>
    Courses can be found with their exact course code. Clicking on a course will
    take the user to its page
  </>,
  <>
    The About section of the course page displays information obtained from the
    pkl files.
  </>,
  <>The Requirements section links to important related courses.</>,
  <>The Reviews section displays ratings and reviews left by users.</>,
];

const accountSources = [
  "https://sat02pap005files.storage.live.com/y4mFEYHXRRoPAYC5O8Rbaad0b4006aMOC4NDQfNYJpHtoy0ShwFdNwpMlDBhYwHizF-L1mvbE5XNh6NfCvlCuTzwOlLV7KvTPfBUBNwojtvEGHVBU0tK2-7cSBW-NrQ0itylp-davAy57EZh_Xj-ujXvdB008HkILDeSx8dv0RS8UqmYCDVm6WstVtu52jO6GlR?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m0vcw8BoYVrCn7DSdB2eDDR4AX15Rj1LqdM6KxjFFpWAbVS9BOudGHZYVpQbE5sY8L2i6mLHRLNWleWQ9Ihkf3pvaSThRd2im-f_dUjkN8q6N158Jcpuny877BQI7B8eb_MCwQgUP801G0zL90f6ITbjuu7m8fknotKkkQNqt08umjTMkQyebO5xuXiix2QQA?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mbg2t8C0pp3qXpJmHnSJWKIXvvV92WYVc2Q9S95z5oqAhD0SBCcUcSJlOsKVYejhUMsqGyh8yLIe2bEK7HgCQGKbUc7yZvtqdj_Oi97DgSw5REmhCSHLViiovEI2cQ5y_vuWMVxLqypNVGNj_rFUQhKd9GvHzKHwu8RRdElPGjeU-Mam411X4-8LvpZ_DzEqi?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m3KhkgYyWgngxBBTWCAoXjXzcF3rMDkNwNUf9ndMlWTLK4Pa2_JY0co2kxLCdEWjB9kWA4uGApaLh3ZbppvdXVmRZCSpqpDq94ftpJV7ZdAGbMc1l2htb1smxHBHyXuGPKzX4wwQaYGiiWWXqq1WMceXAcFIx9yi-DvfS5NyAYbTKX7IaKupmcSyQoqTfQxQn?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mea-HnoJCpq3BFE-d6lDy6H7NafUvoHvI6KJ1q_efUTgJkBT_ltudGJa9yaAQsidxS70ady2odN03LuhA41NUV2YLTA2RsEM7PjowzilU76V1lzGFgzfaczhpdMq55XI66KwG72AjkRA_MY_SX_-doBxiync1uVxYxgm6q6z9tJZJ8XQg2aYrRDgERWexEtCN?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m3QYqwp4Z1ve1N7MSyDgzx-Aas6CHB7KLkgXV0E1dhxSgwPO94ieAufnVv_rFa3RDjn4sS-zm9kWYSW6gvj4PF1Ay6WIWfjRmDpkhzo827ZYgnzr3bLT3g00rpQ4DeJ-3Ry5GcuoQHxWeVv0n0SmUehQdylW7YNZhc-BgKBXIoSEl1yRd5NiZjVFPMdobYkfU?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mJMPZJb5RjC6hERLgj1SPR_FLCCNgeTIhdiVAgZ1AdkTPBf503u-2QLimWcTRYcalG0o0CjRWrYl0ohSHW6_xjln7RxhN4SPxim4I60Q4BXnGLSO3x-IBGkibI3VFfv_AjD70-M8xbNczTAAYhVLjdsnFhzICgvmNv0XdqoYK_CztjVqHhVn5fmbAbAe1YwyC?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mtEi1qFsR-Eco9XjS2FCunYRyt4hLQbAu__DIZIU8cIPgc0pXjoBFGjt-eb3ioHx4UU3P-LlC_hYSSG-WmM4p7heoraICaxA7nq7Pec9i1k5mYGfg_VHRjdkIi-kx6JAniFWlZg5zNvbonDSW13ns_FQutCXRvXPzYfu7cVFhAnghtLJDwcDrILfEiOrWgi9y?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mt_snLwDQOfl3tAP3a2RmSm_Pl1CMegGFHOk6cl7NDr2qDyHC7uc6uoWVnZwrzBggy1b26GHUhFCI_FqeyIiR04PTmJHjzhUtV63OLjsLYhQ16BkntTMq3XrVlIfjj6l5YLG4INgXm-tCR1iAib2vLg8IU5W_iUpDPOCMoZ4vhBdt1wskFHZgY3tNkC9RPTZA?width=1014&height=991&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mBRpe8dXxOiet6NJy6WdLCt2mDURDoKPNf11-C87vOwFj8eMGAAEyY_CRbFT_2nLAQONC8sqIUPQUQSPWez1azAZEUQzMc48ld7nSJwsyYwbDSscqQQdnHAtvzvC9h3WPlESB-oSFRcx-5Ls9mZ84AfJkzW7-fZvi9hwXZXMi6Q8eIB85SvD43xZwMsAavsRW?width=1014&height=991&cropmode=none",
];

const accountCaptions = [
  <>
    To access all the features of our app, users need to sign up with an email
    address. Passwords are salted and hashed before being stored in the
    database.
  </>,
  <>The is the login form. JWT authentication is used.</>,
  <>The blank profile page is displayed after a succesful login.</>,
  <>A logged in user can add one review for any course.</>,
  <>A review consists of a rating out of 10 and a comment.</>,
  <>Users can deleted their own reviews.</>,
  <>Courses can be added to the cart.</>,
  <>A cart for each user is saved in the database.</>,
  <>The user can drag and drop courses into the schedule.</>,
  <>
    When the schedule is full, it tells the user that they can graduated. The
    data provided to us was insufficient to determine actual graduation
    eligibility for any specific degree.
  </>,
];

function Pathfinder() {
  return (
    <>
      <h2 id="pathfinder">Pathfinder (2021)</h2>
      <p>
        A serverless web app for the Software Engineering course ECE444 that I
        created with two other students. The purpose of this app is to help
        University of Toronto students to search and plan their courses.
      </p>
      <p>
        The front end uses Next.js, styled with TailwindCSS. A Flask API gateway
        is running in an Amazon Lambda and CockroachDB PostgreSQL database is
        used to hold data about courses and users. The project is deployed to{" "}
        <a
          href="https://shazam-pathfinder.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        . The GitHub repository is{" "}
        <a
          href="https://github.com/ECE444-2021Fall/project1-education-pathways-group-13-shazam"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        The project began with requirements elicitation. This involved
        identifying stakeholders, their needs, and conducting interviews. We
        chose to interview three students outside of the class about their pain
        points when choosing courses and their current methods for decision
        making. Using the data from our interviewees, we created user personas
        and used Zenhub to plan sprints with epics and user stories. For
        implementing the website, we were required to use Flask, which was
        taught in class, but we may use any other technologies that we chose. We
        were given pkl files with information about the courses.
      </p>
      <h3 id="searching">Searching for Courses</h3>
      <Gallery
        sources={searchingSources}
        captions={searchingCaptions}
        width="800"
        height="781"
      />
      <h3 id="account">User Account</h3>
      <Gallery
        sources={accountSources}
        captions={accountCaptions}
        width="800"
        height="781"
      />
    </>
  );
}

export default Pathfinder;
