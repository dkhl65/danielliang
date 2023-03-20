import React from "react";

function Pathfinder() {
  return (
    <>
      <h2 id="pathfinder">Pathfinder (2021)</h2>
      <p>
        A serverless web app for the Software Engineering course ECE444 that I
        created with two other students. The purpose of this app is to help
        University of Toronto students to search and plan their courses. The
        front end uses Next.js, hosted on Netlify. A Flask API gateway is
        running in an Amazon Lambda and CockroachDB is used to hold data about
        courses and users. The project is deployed to{" "}
        <a
          href="https://shazam-pathfinder.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </>
  );
}

export default Pathfinder;
