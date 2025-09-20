import Gallery from "../Gallery";

const sources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANGycAAAAAAKGWX44dEIU-FSc?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANHCcAAAAAAFtNhm0gPmq3MsY?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANGicAAAAAAMoLuFSma9-lV_4?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANFicAAAAAAPt3-t56zuEm3LU?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANGScAAAAAABpdxO_b1FVGe9o?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANGCcAAAAAAAnjvsaQjtZ1CUI?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANFScAAAAAAIpSwBNO5jpY20Q?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANHScAAAAAAOrUqMlFqeEmSbs?width=1315&height=1035",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANFycAAAAAAIEFVlCE24BJ__0?width=1315&height=1035",
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
