import React from "react";

function BlockchainSimulator() {
  return (
    <>
      <h2 id="blockchain">Blockchain Simulator (2021-2022)</h2>
      <p>
        A web app for the final year capstone project that I developed with
        three other students. The goal of this project is to develop an
        interactive blockchain simulator aimed for non-specialist users that
        conveys conceptual concepts of blockchain, such as the consensus
        algorithms, and provides metrics such as network latency. The entire app
        is developed with React.js, and Redux is used to store simulator
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
    </>
  );
}

export default BlockchainSimulator;
