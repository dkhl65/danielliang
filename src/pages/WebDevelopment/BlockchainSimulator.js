import React from "react";

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
        implemented the simulation settings page. I coded the class the stores
        information about a host in the blockchain.
      </p>
      <img
        alt="homepage"
        src="https://sat02pap005files.storage.live.com/y4mj3oe4nycZZHB9SDbNYPzfiaT6Kb8NsZ2OTwWfIbGWTIRuVXTHlPOawOsZaINv4hudy-VdrIhW6IhM70iTr64DovSG321frxyfLHCr8TFen6BnbtSMrsOVdfyICJNVK0t2rOhZO2_pjAGNrLO4NBn7QwE8oAEWY124js_aX0eaGiErWCojhSToHq52ElfB5fL?width=1999&height=1192&cropmode=none"
      />
      <div>
        This is the home page of the app. The Background Info functionality
        gives quick access to some relevant information about blockchain
        technology.{" "}
      </div>
      <br />
      <img
        alt="settings"
        src="https://sat02pap005files.storage.live.com/y4mM7pwsZ5vvoLaFZVAzfaAip-vzYWTasqyowx4X3tw_VhbPgEeFja90r1Iaw-M0OvavuBmL49pmO_0KpEHYOH8hOHNH6vvPRP2xXp_MuOYzIQN7-9IXT45dlqYtGkG0PyfxWYIyJoKZotdk67nTP-gX88RsotiwM56CbucocuE-IATFAV-GWAL3rKhZGp6QJzW?width=1999&height=1162&cropmode=none"
      />
      <div>
        Clicking "Create Network" on the home page takes the user to this view.
        It asks the user is to input the simulation configurations. I created
        the user interface for this page.
      </div>
      <br />
      <img
        alt="network"
        src="https://sat02pap005files.storage.live.com/y4mYtXVoV7KzIoRyOx0yM4Bphd2pSA-IKV2WNF5Q4U1P46fRG8MXJtykWIUcUdLWQFuEfpswQYyPba-GlVypwedbtNMZ5RWTA-t3dcHfUeBXGA5GunXQMP3FWc-27Uvm6Y3qKHqqlDsm-qL2wXcnfS7PoCev9cj13dh-QYNsajoEnuibV3RoE9pwecD2zUEPOGZ?width=1999&height=1172&cropmode=none"
      />
      <div>
        After selecting the settings it takes the user to the node selector
        page. This allows the user to select the distribution of nodes among the
        different continents.
      </div>
      <br />
      <img
        alt="map"
        src="https://sat02pap005files.storage.live.com/y4mPJ9GsWLhYh1y3JGPKvrsaHYfY1s--cFe2M5NZuDf9EO2bfgM6WARGSEHD_u3_HVwxxHneCCJGHBKF_-wqdHm1mRlf8O2zp32r-BQW4742-LWWpSj1HEk37-4PgtBRpin_hpc3saFR7vxywZKoYTe_HTlR1Kcm9Koo34ENJj3UBfl1JaNvhdZBvFryHzsHbHe?width=1999&height=1182&cropmode=none"
      />
      <div>
        After selecting the settings and node distribution, the values are
        stored into the Redux store and a new network is created with this
        configuration. The nodes are randomly generated according to the
        distribution in each continent. The user is able to simulate the network
        for a certain number of seconds or simulate it until a certain number of
        blocks are added to the longest chain.
      </div>
      <br />
      <img
        alt="host"
        src="https://sat02pap005files.storage.live.com/y4mLtmB6k9ZzIDZobW7G5h42mXtVwGHBM32MWcua5F62J5bogHTVlkH5QsRlJM0Z_8Wu3FvFpZJgA8ziEbgPycjWbACO9HUCojSczzWneh6WFvez2OWBjUKOFOTTLid8oNupvvx-xpdHaZRPS8vvHitlzIsP3e5E6eyGqWfldLGF7XT0qIpIjlQOrBD5320M21K?width=1270&height=944&cropmode=none"
      />
      <div>
        This view provides a dropdown to allow the user to select a host that
        was created during the network creation process. After selecting any
        specific node, it shows the blockchain network from that node's
        perspective. This includes a section to view the local version of the
        chain, some host specific stats such as the location and role of the
        host. The chain object shows the different blocks that are part of the
        chain including all the details such as data and hash of each block.
        This lets the user analyze the chain for different hosts and compare
        them to get a better understanding of how the network behaves.
      </div>
      <br />
      <img
        alt="metrics"
        src="https://sat02pap005files.storage.live.com/y4mHDBulo-x0Kx4eN0H58n78u9j2hbxVFP_ouD4cx_tSAWLl8UMJoU8LVHB5LGw_hRTRAavcEQhAvIyjapyYyL3m5ZZL60ar6LlVUTYb7gFoz0Fo0SbOBoz_HeSNnNiaHZN1JrvIw3q7TSAKajeAfw3clEzmzR6Luh1jWzSHFpm8cZ4jUKQEUcBze6lwBlbU1Rd?width=1858&height=1760&cropmode=none"
      />
      <div>
        The metrics dashboard allows users to view statistics related to the
        current simulation in a tabulated form, and download it as a CSV. The
        dashboard provides descriptions and values of configuration information
        and statistics including: staking, voting power, leader election method,
        anti-malicious algorithm, block size, number of nodes, number of
        malicious nodes, throughput, finality, and nakamoto coefficient.
      </div>
      <br />
      <img
        alt="graph"
        src="https://sat02pap005files.storage.live.com/y4mPFtWRvhR5gqAdS1JZSvoxbPrULKwrRWGzUmd7q2UpKu33VRCEonrNvkGbgdp6Hsvm-R6MtfbztND4SQn8sioN37Y41oIIMaNdo9QwMbfzQcX5-TqKAsXHqVIxO7IJDehj2sGkOFBlszONARo9skgQ4S7YwpvBlYGZRhdauG2rM-TPK8_9K_ggw-HimGR0_eI?width=785&height=777&cropmode=none"
      />
      <div>
        Users will be able to upload previously downloaded CSVs to generate
        comparison graphs to compare statistics between different network
        configurations.
      </div>
    </>
  );
}

export default BlockchainSimulator;
