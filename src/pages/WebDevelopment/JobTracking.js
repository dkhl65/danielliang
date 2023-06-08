import React from "react";
import Gallery from "../Gallery";

const sources = [
  "https://sat02pap005files.storage.live.com/y4mXMwrZQGmmRG_LIefQ9VSRIyqqD1NE5D09SnQYuBSXc3E3XQBF6YepKMc85hD-GYKk-yAX76u9wIPbqjHJEoI1JG2z6NjTYxCqO8LnOs_n6wlgiO0oVHx4KnOIrSRCasddFExRVriZIX89Cl1DkERFN1ACkl5YHDq1qWeFh9-NZz-2WOGDrkZx0sQpQDOPRW5?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4m9hHzxS4wirTeOyEqqAK9TQTOgM7UMqm2tyWojUVVOyVRPxCHsAYUcy8xq-i_jFkPES-WkGgU03RduZq5-0B8Rs-3HtWdXIOjGUH_f55r4EIwpKsv-PzFa-mcy_eoLk6AwcvwvWJ4xzTVFGDfYduU3Z2ji3SaW-GoBQI1itk56d6sT1uSJ4XYwlk8nhp-u6Yp?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mDBuuYkQJxmQLzAlGqCgxbnduJF5ZcHYJjyfbn3ZuqUpNZLa82jqxAPUU2LhDbVZre0ptxTbwA8m9oaMdoCksksHYRunwEpK7hbS_1LguTWne0sph2WR3U31h83HmCNS2K9CLLoz5fRUMqBOAV_D0BUF1iJI_e9ZH-OHTcpUQTmh2lSii_B1-xTvrtECKuFrk?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mdQRiHLsgvo4NDiJxdiYbd1NVgxq1RSHAIuQ_1A5s1OIlpzy4-AA7Al2kngfqtQ9unQxa9eumlpwzh_n2-imsnibWaBGnb1ZvenyFzhAcOZdYXdY8v-Jeo31lz872CoZFwMobaWAjM4EwP_t-NNInauA6ybkt1egp-ecJ08lSCLhZzUGEq0GgKLJE8zM64MQw?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4meM_1bIy-CcKaFFZiIIX0q12vWMXhK2VINVzC72Tar2aKJ3UggdoOpxR-UivSMll6VNWerw4n4GwrE6-SEnpMX80wUzVQZly-9NXYargZYsX1p8CK95tN8Vx7-mV8a6U0Us_5fR0Ec6iRKuJqHOiajFyLKeVJ2I6wVbN9oEJpa5tAnn-7qh-qflokNyUyr-3x?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mTwBlvYm81or9GPQ4uUzrpjuFjBBskyyBq3CguLhWLSO1hdhyqQkhls1PrWuoQiQXwQmo5r7je5MkKO6gZhwzxGcPtAyo9DNt5vtmgVIUFy-fnPSjwcJ5umDInSn26b1lPWkDsxPJJ7xaWT7JT-NPvvPM2_LI3MwqawXDR7X25jIC-YpddnDZvAEkGcMHriHP?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mDMO12kjuIvXWcdjR6rBLLrpfGLMxB0pBsfkqp9KGKcypM49VAKBXd_dhyTIlOj_87a7U6S5oN2vBBXm-1JIVQNZo1jTMTATCPHN3CeTa09mUHONHjw4I1JbIc5VTLLgpD4JDxjUGVgYm8QHrNX2Yz8ovSaSkGv-4glQG1PTQ6FuJe2vnwSfLryXHhKSdPwwd?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mKt_oRwDfXFH5mGbWnQDM1gZf9qQRdhobAXRZKleqZ0xwNtMub0ZW0UxlMzrEwlcS72vMll7UjAqb5wuAl2qX5ivQox6LDf6eadpLbpRtqn4BLnCTHsqO7iIonJ-G8S-z8la5RZUQIM0epiMsiWTpGsS3HF75nJP5NdfqxBlCuI61WMdZVM6mxXq6l92_Cyf9?width=1315&height=1035&cropmode=none",
  "https://sat02pap005files.storage.live.com/y4mYe1EfUimiB_MasJ7wPF2H6oWT7VYTT6SsFbh65ddFtQJdCCT1a8qj1PB220xvmswDdgJoJGjmpw1WGhqrbuYgweiiS27JPRLD3ioU-srl7lvd2KM5uLQLFQn6sPZ-RLYKg0sXPOEjJgVHV9AaR2ebZoalfo5YV0QdhqPTQJl9ExkzEKZFLmZxMSWYX7OEL2L?width=1315&height=1035&cropmode=none",
];

const captions = [
  <>The landing page, which also has the login form.</>,
  <>
    Clicking the "Need and account?" button on the login form will switch it to
    the signup form.
  </>,
  <>
    After logging in, the job list is displayed. There is pagination and the
    search field takes terms from any of the columns.
  </>,
  <>A form pops up to add a new job application after clicking "New Job".</>,
  <>An existing job application can be edited by clicking the pencil icon.</>,
  <>An existing job application can be deleted by clicking the trash icon.</>,
  <>
    The calendar page uses a Github style calendar to show each type of
    activity.
  </>,
  <>
    The statistics page show activity stats during the specified time period.
  </>,
  <>
    Clicking on the username in the top right corner opens the account settings
    page for changing the password.
  </>,
];

function JobTracking() {
  return (
    <>
      <h2 id="jobtracking">Job Tracking (2023)</h2>
      <p>
        A web app I created on my own. The purpose of this app is to record
        details about job applications to keep records and view analytics on a
        job search.
      </p>
      <p>
        The frontend uses React.js with Material UI. The backend uses
        Express.js, hosted on Vercel. A PostgreSQL database hosted on
        CockroachDB holds data about job applications and users. The project is
        deployed to{" "}
        <a
          href="https://jobtracking.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        . The GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/jobtracking"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <Gallery sources={sources} captions={captions} />
    </>
  );
}

export default JobTracking;
