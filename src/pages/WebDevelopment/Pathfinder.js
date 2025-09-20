import Gallery from "../Gallery";

const searchingSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANrCYAAAAAALfE_fF6lHySM4o?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANqyYAAAAAAA8WuipSzS9ikoM?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANqiYAAAAAAIlGa84I9Y1-XF8?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANrSYAAAAAAPNcrCXO1qHpxxw?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANriYAAAAAAGvFh7B1ch4IDak?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANryYAAAAAAMuZUSzhB-wPzeM?width=1014&height=991",
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
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANsSYAAAAAAMR-YWLTCuVxn6A?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANsCYAAAAAACFg5nZIu4oUxaY?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANsiYAAAAAAEESNwQHL1AcMic?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANtiYAAAAAAG-ieVues4P3q64?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANtSYAAAAAAMG5V4mW6CeSeww?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANsyYAAAAAANYfue_zfs7BP8I?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANtCYAAAAAAD6fDpiYNmC8aY4?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANtyYAAAAAAA_BqZsbsBr3lgo?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANuCYAAAAAAOnXU3kpiOQHzeo?width=1014&height=991",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANuSYAAAAAACOhg0scieMw_Ko?width=1014&height=991",
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
