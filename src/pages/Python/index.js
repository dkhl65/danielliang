import TableOfContents from "../TableOfContents";
import AIWeatherClassifier from "./AIWeatherClassifier";
import GoblinShooter from "./GoblinShooter";

function Python() {
  return (
    <div className="container">
      <TableOfContents />
      <div className="content">
        <h1>Python</h1>
        <p>
          I began learning Python on my own in 2019 to help my university's
          robotics team. I continued learning in the summer to develop my first
          animated computer game. I used Python for courses in my Artificial
          Intelligence minor and for{" "}
          <a
            href="https://github.com/igraph/usability-benchmarks/pull/1"
            target="_blank"
            rel="noreferrer"
          >
            contribution to an open-source project on GitHub
          </a>
          .
        </p>
        <AIWeatherClassifier />
        <GoblinShooter />
      </div>
    </div>
  );
}

export default Python;
