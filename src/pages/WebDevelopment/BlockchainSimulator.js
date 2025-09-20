import Gallery from "../Gallery";

const networkSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANoyYAAAAAAK0aGs6zOWxfts8?width=1999&height=1192",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANpCYAAAAAANORRCBZlgbCojI?width=1999&height=1162",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANoiYAAAAAAM_TIy7rX9BTlzw?width=1999&height=1172",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANpSYAAAAAAEtLWK6CPeXolHA?width=1999&height=1182",
];

const networkCaptions = [
  <>
    This is the home page of the app. The Background Info functionality gives
    quick access to some relevant information about blockchain technology.
  </>,
  <>
    Clicking "Create Network" on the home page takes the user to this view. It
    asks the user is to input the simulation configurations. I created the user
    interface for this page.
  </>,
  <>
    After selecting the settings it takes the user to the node selector page.
    This allows the user to select the distribution of nodes among the different
    continents.
  </>,
  <>
    After selecting the node distribution, the values are stored into the Redux
    store and a new network is created with this configuration. The nodes are
    randomly generated according to the distribution in each continent. The user
    is able to simulate the network for a certain number of seconds or simulate
    it until a certain number of blocks are added to the longest chain.
  </>,
];

const hostSources = [
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANpiYAAAAAADAX86tbqSugO0Y?width=1270&height=944",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANqCYAAAAAAIDFQGv6dsFlCWw?width=1858&height=1760",
  "https://1drv.ms/i/c/0da6cefb80d170b9/UQS5cNGA-86mIIANpyYAAAAAAKEguvu7-wCsHv0?width=785&height=777",
];

const hostCaptions = [
  <>
    This view provides a dropdown to allow the user to select a host that was
    created during the network creation process. After selecting any specific
    node, it shows the blockchain network from that node's perspective. This
    includes a section to view the local version of the chain, some host
    specific stats such as the location and role of the host. The chain object
    shows the different blocks that are part of the chain including all the
    details such as data and hash of each block. This lets the user analyze the
    chain for different hosts and compare them to get a better understanding of
    how the network behaves.
  </>,
  <>
    The metrics dashboard allows users to view statistics related to the current
    simulation in a tabulated form, and download it as a CSV. The dashboard
    provides descriptions and values of configuration information and statistics
    including: staking, voting power, leader election method, anti-malicious
    algorithm, block size, number of nodes, number of malicious nodes,
    throughput, finality, and nakamoto coefficient.
  </>,
  <>
    Users will be able to upload previously downloaded CSVs to generate comparison
    graphs to compare statistics between different network configurations.
  </>,
];

function BlockchainSimulator() {
  return (
    <>
      <h2 id="blockchain">Blockchain Simulator (2021-2022)</h2>
      <p>
        A web app for the final year capstone project that I developed with
        three other students. The goal of this project is to develop an
        interactive blockchain simulator aimed to help non-specialist users
        learn about the concepts of blockchain, such as the consensus
        algorithms, and provides metrics such as network latency.
      </p>
      <p>
        The app was developed with React.js in TypeScript. Redux is used to
        store simulator settings. Chakra UI is used for styling the user
        interface. The GitHub repository is{" "}
        <a
          href="https://github.com/ece496-blockchain-capstone-team/ece496-blockchain-simulator"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        The capstone project is proposed by a professor and supervised by a TA.
        We had weekly meetings with the TA to determine project requirements and
        deliverables. Most of the project involved doing research on blockchain
        technologies and writing documentation. We chose to focus on the Proof
        of Stake consensus algorithm for the simulator, since it is the most
        commonly used consensus algorithm for popular cryptocurrencies such as
        Ethereum. We used GitHub for collaboration on the code. We used GitHub
        issues and the projects section to organize our tasks. We used Figma to
        plan the user interface.
      </p>
      <p>
        I set up commit hooks to lint and auto-format the code, and TypeDoc to
        generate documentation for the simulation logic classes. I designed and
        implemented the simulation settings page. I coded the class that stores
        information about a host in the blockchain.
      </p>
      <h3 id="network">Network Setup</h3>
      <Gallery
        sources={networkSources}
        captions={networkCaptions}
        height="581"
      />
      <h3 id="host">Host Data</h3>
      <Gallery sources={hostSources} captions={hostCaptions} height="743" />
    </>
  );
}

export default BlockchainSimulator;
