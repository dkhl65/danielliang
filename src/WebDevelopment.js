import React from "react";
import TableOfContents from "./TableOfContents";

function WebDevelopment() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Web Development</h1>
        <p>
          In grade 4 and 5, I learned HTML and JavaScript using books I borrowed
          from the library. That was my first experience with coding.
        </p>
        <h2 id="blockchain">Blockchain Simulator (2021-2022)</h2>
        <p>
          A web app for the final year capstone project that I developed with
          three other students. The goal of this project is to develop an
          interactive blockchain simulator aimed for non-specialist users that
          conveys conceptual concepts of blockchain, such as the consensus
          algorithms, and provides metrics such as network latency. The entire
          app is developed with React.js, and Redux is used to store simulator
          settings. The GitHub can be found{" "}
          <a
            href="https://github.com/ece496-blockchain-capstone-team/ece496-blockchain-simulator"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
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
        <h2 id="oldfiles">Old Files (2009-2011)</h2>
        <p>
          My first experience with coding. More files can be found{" "}
          <a
            href="https://github.com/dkhl65/Web-Development"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
        <h3 id="numbergame">Number Guessing Game</h3>
        <p>
          A simple game I learned from a book and modified to add more features.
          The computer generates a number between 1 and 100 and the player
          enters a guess. For each wrong guess, the computer provides a hint of
          whether to guess lower or higher. There is a time limit to guess the
          number.
        </p>
        <img
          alt="Number Guessing Game"
          src="https://sat02pap005files.storage.live.com/y4mALRQ3qU47qetmFa3Io1gWKfkVnu3sXMA4HAUmabz3Z-YQNES0zu0xTOErlFzxZHuWlvoRtXyw9gKkcKJazfACAJjqtgK6t3AkWVr19-JeNXgb3qb81C9wUTjfXjyk1zykoOJeS7fH-cpd1z_ABfgbItqtStAKGSzZmH2bj_ISjP5n7gcTm5x-GvHJr-2ib5h?width=442&height=295&cropmode=none"
          width="442"
          height="295"
          class="framed"
        />
        <h3 id="customized">Customized Page</h3>
        <p>
          A page that can be customized by the user entering text and colours.
          It was made from a book tutorial and modified. The colour can be a
          hexadecimal value or a colour name. Text can be added or removed from
          the page.
        </p>
        <img
          alt="Customized Page"
          src="https://sat02pap005files.storage.live.com/y4mJ5bwciZs6ia-nZ0Uc6iRdr0deBtJheUTqGWK5uJa2j-crbxKH5eEq_6Xv_2vR9BvpdZ1jCtJvbReLHJJOymcE45ovCvSChvTcAv_-EgD26UUByG2FP3d9PeAAckicxMw4kN-WOzNQWdLgk8_HEvXA4xkTUSs3sTIVa3cRV8RbXiNRmYUXrcgtLwhs8UMAH-V?width=592&height=423&cropmode=none"
          width="592"
          height="423"
          class="framed"
        />
      </div>
    </div>
  );
}

export default WebDevelopment;
